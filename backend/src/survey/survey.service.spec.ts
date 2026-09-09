import { BadRequestException, NotFoundException } from '@nestjs/common';
import type { DataSource } from 'typeorm';

import { SurveyService } from './survey.service';

describe('SurveyService', () => {
  const query = jest.fn();
  const service = new SurveyService({ query } as unknown as DataSource);
  const txId = 'ab'.repeat(32);

  beforeEach(() => query.mockReset());

  it('returns exact label 17 CBOR with the requested index', async () => {
    query.mockResolvedValue([{ payload_cbor_hex: '820081a0' }]);

    await expect(service.getDefinition(txId.toUpperCase(), 2)).resolves.toEqual(
      {
        txId,
        surveyIndex: 2,
        metadataLabel: 17,
        payloadCborHex: '820081a0',
      },
    );
    expect(query).toHaveBeenCalledWith(expect.any(String), [
      txId.toUpperCase(),
    ]);
  });

  it('rejects malformed transaction ids', async () => {
    await expect(service.getDefinition('not-a-hash', 0)).rejects.toBeInstanceOf(
      BadRequestException,
    );
    expect(query).not.toHaveBeenCalled();
  });

  it.each([-1, 1.5, NaN, Infinity, 65536, Number.MAX_SAFE_INTEGER])(
    'rejects invalid survey index %s before querying',
    async (index) => {
      await expect(service.getDefinition(txId, index)).rejects.toBeInstanceOf(
        BadRequestException,
      );
      expect(query).not.toHaveBeenCalled();
    },
  );

  it('accepts the maximum uint16 survey index', async () => {
    query.mockResolvedValue([{ payload_cbor_hex: '820081a0' }]);
    await expect(service.getDefinition(txId, 65535)).resolves.toMatchObject({
      surveyIndex: 65535,
    });
  });

  it('returns not found when label 17 is absent', async () => {
    query.mockResolvedValue([]);
    await expect(service.getDefinition(txId, 0)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
