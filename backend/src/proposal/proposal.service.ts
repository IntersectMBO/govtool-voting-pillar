import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import path from 'path';
import * as fs from 'fs';
import { ProposalListDto } from './proposal.dto';
import {
  GovernanceActionProposalType,
  RawQueryGovernanceActionProposalType,
} from 'src/types/proposal';

@Injectable()
export class ProposalService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async listProposals(query: ProposalListDto) {
    const sqlFilePath = path.join(__dirname, '../sql', 'list-proposals.sql');
    const sql = fs.readFileSync(sqlFilePath, 'utf8');

    const {
      page = 1,
      pageSize = 10,
      sort = 'SoonestToExpire',
      type = null,
      search = '',
      drepId = null,
    } = query;

    const countQuery = `SELECT COUNT(*) FROM (${sql}) AS filtered_proposals`;

    const totalResult = await this.dataSource.query<{ count: string }[]>(
      countQuery,
      [search ? `%${search}%` : null, drepId || null, sort, type || null],
    );

    const total = parseInt(totalResult[0].count, 10);

    const result = await this.dataSource.query<
      RawQueryGovernanceActionProposalType[]
    >(`${sql} LIMIT $6 OFFSET $5`, [
      search ? `%${search}%` : null,
      drepId || null,
      sort,
      type || null,
      (page - 1) * pageSize,
      pageSize,
    ]);

    const elements = result.map(this.mapGovernanceActionProposals);

    return {
      page: Number(page),
      pageSize: Number(pageSize),
      total,
      elements,
    };
  }

  async getProposalById(
    proposalId: string,
  ): Promise<GovernanceActionProposalType> {
    const [hash] = proposalId.split('#');
    const result = await this.listProposals({ search: hash });

    if (result.elements.length === 0) {
      return null;
    }

    return result.elements[0];
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
      dRepYesVotes: parseInt(govActionProposal.yes_votes),
      dRepNoVotes: parseInt(govActionProposal.no_votes),
      dRepAbstainVotes: parseInt(govActionProposal.abstain_votes),
      poolYesVotes: parseInt(govActionProposal.pool_yes_votes),
      poolNoVotes: parseInt(govActionProposal.pool_no_votes),
      poolAbstainVotes: parseInt(govActionProposal.pool_abstain_votes),
      ccYesVotes: parseInt(govActionProposal.cc_yes_votes),
      ccNoVotes: parseInt(govActionProposal.cc_no_votes),
      ccAbstainVotes: parseInt(govActionProposal.cc_abstain_votes),
      prevGovActionIndex: parseInt(govActionProposal.prev_gov_action_index),
      prevGovActionTxHash: govActionProposal.prev_gov_action_tx_hash,
    };
  }
}
