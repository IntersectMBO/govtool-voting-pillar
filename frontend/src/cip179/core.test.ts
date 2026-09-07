/** @jest-environment node */
import type { Metadatum } from 'cip-179';

import { decodeDefinition } from './core';
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
