import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import path from 'path';
import * as fs from 'fs';

import { ProposalListDto } from './proposal.dto';
import {
  GovernanceActionProposalType,
  RawQueryGovernanceActionProposalType,
} from '../types/proposal';

@Injectable()
export class ProposalService {
  private readonly logger = new Logger(ProposalService.name);
  private sqlCache: { [key: string]: string } = {};

  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  private loadSqlFile(filePath: string): string {
    if (!this.sqlCache[filePath]) {
      try {
        this.sqlCache[filePath] = fs.readFileSync(filePath, 'utf8');
      } catch (error) {
        this.logger.error(`Failed to read SQL file: ${filePath}`, error.stack);
        throw new Error(`Could not load SQL file: ${error.message}`);
      }
    }
    return this.sqlCache[filePath];
  }

  async listProposals(query: ProposalListDto) {
    const {
      page = 0,
      pageSize = 10,
      sort = 'SoonestToExpire',
      type = null,
      search = '',
      drepId = null,
    } = query;

    const normalizedParams = {
      search: search ? `%${search}%` : '',
      drepId: drepId || null,
      sort,
      type: Array.isArray(type) ? type[0] || null : type || null,
      offset: Number(page) * Number(pageSize),
      limit: Number(pageSize),
    };

    this.logger.debug(
      'Executing proposal query with parameters',
      normalizedParams,
    );

    const sqlFilePath = path.join(__dirname, '../sql', 'list-proposals.sql');
    const sql = this.loadSqlFile(sqlFilePath);

    try {
      const countSql = `SELECT COUNT(*) AS total FROM (${sql}) AS filtered_proposals`;

      const countParams = [
        normalizedParams.search,
        normalizedParams.drepId,
        normalizedParams.sort,
        normalizedParams.type,
      ];

      this.logger.debug(
        'Count query params (types):',
        countParams.map((p) => typeof p),
      );
      this.logger.debug(
        'Count query params (values):',
        JSON.stringify(countParams),
      );

      const totalResult = await this.dataSource.query<{ total: string }[]>(
        countSql,
        countParams,
      );

      const total = parseInt(totalResult[0].total, 10);
      this.logger.debug(`Count query returned total: ${total}`);

      const dataSql = `${sql} LIMIT $5 OFFSET $6`;

      const dataParams = [
        normalizedParams.search,
        normalizedParams.drepId,
        normalizedParams.sort,
        normalizedParams.type,
        normalizedParams.limit,
        normalizedParams.offset,
      ];

      this.logger.debug(
        'Data query params (types):',
        dataParams.map((p) => typeof p),
      );
      this.logger.debug(
        'Data query params (values):',
        JSON.stringify(dataParams),
      );

      const result = await this.dataSource.query<
        RawQueryGovernanceActionProposalType[]
      >(dataSql, dataParams);

      this.logger.debug(`Data query returned ${result.length} results`);

      if (result.length === 0) {
        this.logger.debug('No results returned.');
      }

      const elements = result.map(this.mapGovernanceActionProposals);

      return {
        page: Number(page),
        pageSize: Number(pageSize),
        total,
        elements,
      };
    } catch (error) {
      this.logger.error('Failed to execute proposal query', error.stack);
      throw new Error(`Database query failed: ${error.message}`);
    }
  }

  async getProposalById(
    proposalId: string,
  ): Promise<GovernanceActionProposalType> {
    try {
      const [hash] = proposalId.split('#');
      const result = await this.listProposals({ search: hash });

      if (result.elements.length === 0) {
        return null;
      }

      return result.elements[0];
    } catch (error) {
      this.logger.error(
        `Failed to retrieve proposal by ID: ${proposalId}`,
        error.stack,
      );
      throw new Error(`Could not retrieve proposal: ${error.message}`);
    }
  }

  private mapGovernanceActionProposals(
    govActionProposal: RawQueryGovernanceActionProposalType,
  ): GovernanceActionProposalType {
    return {
      id: parseInt(govActionProposal.id),
      txHash: govActionProposal.tx_hash,
      index: parseInt(govActionProposal.index),
      type: govActionProposal.type,
      details: govActionProposal.description,
      expiryDate: govActionProposal.expiration_time,
      expiryEpochNo: govActionProposal.expiration,
      createdDate: govActionProposal.time,
      createdEpochNo: govActionProposal.epoch_no,
      url: govActionProposal.url,
      metadataHash: govActionProposal.metadata_hash,
      protocolParams: govActionProposal.row_to_json,
      title: govActionProposal.title,
      abstract: govActionProposal.abstract,
      motivation: govActionProposal.motivation,
      rationale: govActionProposal.rationale,
      dRepYesVotes: parseInt(govActionProposal.yes_votes) || 0,
      dRepNoVotes: parseInt(govActionProposal.no_votes) || 0,
      dRepAbstainVotes: parseInt(govActionProposal.abstain_votes) || 0,
      poolYesVotes: parseInt(govActionProposal.pool_yes_votes) || 0,
      poolNoVotes: parseInt(govActionProposal.pool_no_votes) || 0,
      poolAbstainVotes: parseInt(govActionProposal.pool_abstain_votes) || 0,
      ccYesVotes: parseInt(govActionProposal.cc_yes_votes) || 0,
      ccNoVotes: parseInt(govActionProposal.cc_no_votes) || 0,
      ccAbstainVotes: parseInt(govActionProposal.cc_abstain_votes) || 0,
      prevGovActionIndex:
        parseInt(govActionProposal.prev_gov_action_index) || 0,
      prevGovActionTxHash: govActionProposal.prev_gov_action_tx_hash,
      metadataJson: govActionProposal.metadata_json,
    };
  }
}
