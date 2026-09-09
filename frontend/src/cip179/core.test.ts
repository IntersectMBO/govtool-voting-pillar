/** @jest-environment node */
import { jest } from '@jest/globals';
import { blake2bHex } from 'blakejs';
import type { Metadatum } from 'cip-179';

import { decodeDefinition, enrichDefinition, parseSurveyLink } from './core';
import type { Cip179MetadatumCodec } from './types';
import fixture from './fixtures/dbSyncMetadata.json';

// The host owns its CBOR codec; keep this test independent of any particular
// serialization library. The fixture matches db-sync's Map.singleton key md
// (cardano-db-sync eb8e862de8f4076523eb4146905bab7eac1d5e1e, Insert/Tx.hs).
const definition: Metadatum = new Map<Metadatum, Metadatum>([
  [0n, 5n],
  [1n, [0n, new Uint8Array(28).fill(0x22)]],
  [2n, 'Audit'],
  [3n, 'Independent fixture'],
  [4n, [0n]],
  [5n, 500n],
  [6n, [0n]],
  [7n, [[1n, 'Choose', ['A', 'B'], 1n]]],
]);
const second = new Map(definition as Map<Metadatum, Metadatum>);
second.set(2n, 'Second');
const inner: Metadatum = [0n, [definition]];
const values = new Map<string, Metadatum>([
  [fixture.payloadOnlyCborHex, inner],
  [fixture.dbSyncRowCborHex, new Map([[17n, inner]])],
  [
    fixture.batchedDbSyncRowCborHex,
    new Map([[17n, [0n, [definition, second]]]]),
  ],
  ['a0', new Map()],
  [`a112${fixture.payloadOnlyCborHex}`, new Map([[18n, inner]])],
  [
    `a1623137${fixture.payloadOnlyCborHex}`,
    new Map<Metadatum, Metadatum>([['17', inner]]),
  ],
  ['a11100', new Map([[17n, 0n]])],
]);
const codec: Cip179MetadatumCodec = {
  metadatumToCbor: () => {
    throw new Error('Encoding is not part of this API');
  },
  cborToMetadatum: (bytes) => {
    const value = values.get(Buffer.from(bytes).toString('hex'));
    if (!value) throw new Error('Invalid fixture CBOR');
    return value;
  },
};
const decode = (hex: string, index = 0, expiry = 501) =>
  decodeDefinition(
    {
      txId: fixture.txId,
      surveyIndex: index,
      metadataLabel: 17,
      payloadCborHex: hex,
    },
    { txId: fixture.txId, index },
    codec,
    expiry
  );

describe('CIP-179 definition metadata boundary', () => {
  it('keeps compatibility with an inner payload from the host codec', () => {
    expect(decode(fixture.payloadOnlyCborHex).title).toBe('Audit');
  });
  it('unwraps the db-sync metadata map returned by the host codec', () => {
    expect(decode(fixture.dbSyncRowCborHex).title).toBe('Audit');
  });
  it('selects a nonzero definition index inside the label payload', () => {
    expect(decode(fixture.batchedDbSyncRowCborHex, 1).title).toBe('Second');
  });
  it.each([
    'a0',
    `a112${fixture.payloadOnlyCborHex}`,
    `a1623137${fixture.payloadOnlyCborHex}`,
    'a11100',
  ])('rejects invalid metadata %s', (hex) => {
    expect(() => decode(hex)).toThrow();
  });
  it('still rejects a missing definition index', () => {
    expect(() => decode(fixture.dbSyncRowCborHex, 1)).toThrow();
  });
  it('still checks the action expiry after unwrapping', () => {
    expect(() => decode(fixture.dbSyncRowCborHex, 0, 502)).toThrow();
  });
  it('still checks the returned transaction reference', () => {
    expect(() =>
      decodeDefinition(
        {
          txId: 'ab'.repeat(32),
          surveyIndex: 0,
          metadataLabel: 17,
          payloadCborHex: fixture.dbSyncRowCborHex,
        },
        { txId: fixture.txId, index: 0 },
        codec,
        501
      )
    ).toThrow();
  });
});

describe('CIP-179 untrusted inputs', () => {
  const envelope = {
    txId: fixture.txId,
    surveyIndex: 0,
    metadataLabel: 17 as const,
    payloadCborHex: fixture.dbSyncRowCborHex,
  };
  const ref = { txId: fixture.txId, index: 0 };
  const read = (expiry: number | undefined) =>
    decodeDefinition(envelope, ref, codec, expiry);
  const survey = read(501);
  const document = {
    specVersion: 5,
    kind: 'cardano-survey-presentation',
    questions: [{ prompt: 'Question', options: ['Yes', 'No'] }],
  };
  const originalFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = originalFetch;
    jest.useRealTimers();
  });
  const load = (doc: unknown) => {
    const bytes = Uint8Array.from(
      new TextEncoder().encode(JSON.stringify(doc))
    );
    globalThis.fetch = jest
      .fn<typeof fetch>()
      .mockImplementation(async () => new Response(bytes));
    return {
      ...survey,
      title: '',
      description: '',
      questions: [
        {
          ...survey.questions[0],
          prompt: '',
          options: { type: 'count' as const, count: 2 },
        },
      ],
      contentAnchor: {
        uri: 'https://example.invalid/survey.json',
        hash: Uint8Array.from(
          Buffer.from(blake2bHex(bytes, undefined, 32), 'hex')
        ),
      },
    };
  };
  it.each([undefined, null, NaN, Infinity, -1, 0, 501.5])(
    'rejects unavailable or invalid expiry %s',
    (expiry) => {
      expect(() => read(expiry as number | undefined)).toThrow(/epoch/);
    }
  );
  it.each([65535, 65536])('enforces uint16 link index %s', (index) => {
    const link = parseSurveyLink({
      body: {
        cip179: {
          specVersion: 5,
          kind: 'survey-link',
          surveyTxId: ref.txId,
          surveyIndex: index,
        },
      },
    });
    expect(link).toEqual(index === 65535 ? { ...ref, index } : null);
  });
  it('uses verified strings while preserving on-chain fields', async () => {
    const result = await enrichDefinition(
      load({
        ...document,
        endEpoch: 999,
        questions: [{ ...document.questions[0], required: false }],
      })
    );
    expect(result.endEpoch).toBe(500);
    expect(result.questions[0]).toMatchObject({
      prompt: 'Question',
      required: true,
      options: { type: 'options', labels: ['Yes', 'No'] },
    });
    const anchored = load(document);
    await expect(
      enrichDefinition({
        ...anchored,
        title: 'On-chain',
        questions: survey.questions,
      })
    ).resolves.toMatchObject({
      title: 'On-chain',
      questions: survey.questions,
    });
  });
  it.each([
    { title: {} },
    { description: [] },
    { questions: {} },
    { questions: [null] },
    { questions: [{ prompt: {} }] },
    { questions: [{ options: [{ bad: true }, 'No'] }] },
    { questions: [{ ratingLabels: ['Low', 2] }] },
  ])('rejects hash-valid malformed presentation %j', async (fields) => {
    await expect(
      enrichDefinition(load({ ...document, ...fields }))
    ).rejects.toThrow(/presentation/);
  });
  it('rejects a raw-byte hash mismatch', async () => {
    const anchored = load(document);
    anchored.contentAnchor.hash = new Uint8Array(32);
    await expect(enrichDefinition(anchored)).rejects.toThrow(/hash/);
  });
  it('bounds streamed content even without Content-Length', async () => {
    const anchored = load(document);
    let signal: AbortSignal | null | undefined;
    globalThis.fetch = jest
      .fn<typeof fetch>()
      .mockImplementation(async (_url, init) => {
        signal = init?.signal;
        return new Response(
          new ReadableStream({
            start(controller) {
              controller.enqueue(new Uint8Array(1024 * 1024));
              controller.enqueue(new Uint8Array(1));
              controller.close();
            },
          })
        );
      });
    await expect(enrichDefinition(anchored)).rejects.toThrow(/too large/);
    expect(signal?.aborted).toBe(true);
  });
  it('keeps the deadline active after response headers', async () => {
    jest.useFakeTimers();
    const anchored = load(document);
    globalThis.fetch = jest.fn<typeof fetch>().mockImplementation(
      async (_url, init) =>
        new Response(
          new ReadableStream({
            start(controller) {
              init?.signal?.addEventListener('abort', () =>
                controller.error(new Error('Aborted'))
              );
            },
          })
        )
    );
    await Promise.all([
      expect(enrichDefinition(anchored)).rejects.toThrow(/Aborted/),
      jest.advanceTimersByTimeAsync(10_000),
    ]);
  });
});
