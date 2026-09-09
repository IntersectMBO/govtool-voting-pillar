import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import path from 'path';
import * as fs from 'fs';

type SurveyMetadataRow = {
  payload_cbor_hex: string;
};

export type SurveyDefinitionPayload = {
  txId: string;
  surveyIndex: number;
  metadataLabel: 17;
  payloadCborHex: string;
};

@Injectable()
export class SurveyService {
  private readonly sql = fs.readFileSync(
    path.join(__dirname, '../sql', 'get-survey-definition.sql'),
    'utf8',
  );

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async getDefinition(
    txId: string,
    surveyIndex: number,
  ): Promise<SurveyDefinitionPayload> {
    if (!/^[0-9a-fA-F]{64}$/.test(txId)) {
      throw new BadRequestException('txId must be a 64-character hex string');
    }
    if (
      !Number.isSafeInteger(surveyIndex) ||
      surveyIndex < 0 ||
      surveyIndex > 65535
    ) {
      throw new BadRequestException(
        'surveyIndex must be an integer between 0 and 65535',
      );
    }

    const rows = await this.dataSource.query<SurveyMetadataRow[]>(this.sql, [
      txId,
    ]);
    const row = rows[0];
    if (!row) {
      throw new NotFoundException(
        `No metadata label 17 found for transaction ${txId}`,
      );
    }

    return {
      txId: txId.toLowerCase(),
      surveyIndex,
      metadataLabel: 17,
      payloadCborHex: row.payload_cbor_hex,
    };
  }
}
