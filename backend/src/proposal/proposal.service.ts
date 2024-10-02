import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  GetProposalListParams,
  GovernanceActionProposalType,
  RawQueryGovernanceActionProposalType,
} from '../types/proposal';
import { GovActionProposal } from '../entities/govActionProposal.entity';

export const exampleProposalList = [
  {
    id: '1',
    txHash: '12abcd',
    index: 0,
    type: 'InfoAction',
    details: {},
    expiryDate: '2024-10-02T11:32:08.78692Z',
    expiryEpochNo: 475,
    createdDate: '2024-09-17T05:43:54Z',
    createdEpochNo: 460,
    url: 'mock.metadata.io',
    metadataHash: '1',
    protocolParams: null,
    title: 'Test Proposal',
    abstract: 'This is a test proposal.',
    motivation: 'To test the proposal functionality.',
    rationale: 'This is a test proposal to test the proposal functionality.',
    dRepYesVotes: 200,
    dRepNoVotes: 300,
    dRepAbstainVotes: 400,
    poolYesVotes: 0,
    poolNoVotes: 0,
    poolAbstainVotes: 0,
    ccYesVotes: 0,
    ccNoVotes: 0,
    ccAbstainVotes: 0,
    prevGovActionIndex: null,
    prevGovActionTxHash: null,
  },
  {
    id: '2',
    txHash: '34abcd',
    index: 0,
    type: 'InfoAction',
    details: {},
    expiryDate: '2024-10-02T11:32:08.78692Z',
    expiryEpochNo: 475,
    createdDate: '2024-09-17T11:01:48Z',
    createdEpochNo: 460,
    url: 'mock.metadata.io',
    metadataHash: '1',
    protocolParams: null,
    title: null,
    abstract: null,
    motivation: null,
    rationale: null,
    dRepYesVotes: 0,
    dRepNoVotes: 200,
    dRepAbstainVotes: 200,
    poolYesVotes: 0,
    poolNoVotes: 0,
    poolAbstainVotes: 0,
    ccYesVotes: 0,
    ccNoVotes: 0,
    ccAbstainVotes: 0,
    prevGovActionIndex: null,
    prevGovActionTxHash: null,
  },
];
@Injectable()
export class ProposalService {
  constructor(
    @InjectRepository(GovActionProposal)
    private readonly govActionProposalRepo: Repository<GovActionProposal>,
  ) {}

  async getProposalList({ page = 0, pageSize = 10 }: GetProposalListParams) {
    const alwaysNoConfidenceCTE = this.govActionProposalRepo
      .createQueryBuilder()
      .select('COALESCE(amount, 0)', 'amount')
      .from('drep_hash', 'drep_hash')
      .leftJoin('drep_distr', 'drep_distr', 'drep_hash.id = drep_distr.hash_id')
      .where("drep_hash.view = 'drep_always_no_confidence'")
      .orderBy('epoch_no', 'DESC')
      .limit(1);

    const alwaysAbstainCTE = this.govActionProposalRepo
      .createQueryBuilder()
      .select('COALESCE(amount, 0)', 'amount')
      .from('drep_hash', 'drep_hash')
      .leftJoin('drep_distr', 'drep_distr', 'drep_hash.id = drep_distr.hash_id')
      .where("drep_hash.view = 'drep_always_abstain'")
      .orderBy('epoch_no', 'DESC')
      .limit(1);

    const baseQuery = this.govActionProposalRepo
      .createQueryBuilder('gov_action_proposal')
      .addCommonTableExpression(
        alwaysNoConfidenceCTE,
        'always_no_confidence_voting_power',
      )
      .addCommonTableExpression(alwaysAbstainCTE, 'always_abstain_voting_power')
      .select([
        'gov_action_proposal.id',
        "encode(creator_tx.hash, 'hex') as tx_hash",
        'gov_action_proposal.index',
        'gov_action_proposal.type',
        'gov_action_proposal.expiration',
        `(
  case when gov_action_proposal.type = 'TreasuryWithdrawals' then
    json_build_object('Reward Address', stake_address.view, 'Amount', treasury_withdrawal.amount)

    when gov_action_proposal.type::text = 'InfoAction' then
    json_build_object()

    when gov_action_proposal.type::text = 'HardForkInitiation' then
    json_build_object(
      'major', (gov_action_proposal.description->'contents'->1->>'major')::int, 
      'minor', (gov_action_proposal.description->'contents'->1->>'minor')::int
    )
  else
    null
  end
) as details`,
        'epoch_utils.last_epoch_end_time + epoch_utils.epoch_duration * (gov_action_proposal.expiration - epoch_utils.last_epoch_no) as expiry_date',
        'gov_action_proposal.expiration as expiry_epoch_no',
        'creator_block.time as created_date',
        'creator_block.epoch_no as created_epoch_no',
        'voting_anchor.url',
        "encode(voting_anchor.data_hash, 'hex') as metadata_hash",
        'ROW_TO_JSON(proposal_params) as protocol_params',
        'off_chain_vote_gov_action_data.title',
        'off_chain_vote_gov_action_data.abstract',
        'off_chain_vote_gov_action_data.motivation',
        'off_chain_vote_gov_action_data.rationale',
        "coalesce(Sum(ldd_drep.amount) FILTER (WHERE voting_procedure.vote::text = 'Yes'), 0) + (CASE WHEN gov_action_proposal.type = 'NoConfidence' THEN always_no_confidence_voting_power.amount ELSE 0 END) as yes_votes",
        "coalesce(Sum(ldd_drep.amount) FILTER (WHERE voting_procedure.vote::text = 'No'), 0) + (CASE WHEN gov_action_proposal.type = 'NoConfidence' THEN 0 ELSE always_no_confidence_voting_power.amount END) as no_votes",
        "coalesce(Sum(ldd_drep.amount) FILTER (WHERE voting_procedure.vote::text = 'Abstain'), 0) + always_abstain_voting_power.amount as abstain_votes",
        'coalesce(vp_by_pool.poolYesVotes, 0) as pool_yes_votes',
        'coalesce(vp_by_pool.poolNoVotes, 0) as pool_no_votes',
        'coalesce(vp_by_pool.poolAbstainVotes, 0) as pool_abstain_votes',
        'coalesce(vp_by_cc.ccYesVotes, 0) as cc_yes_votes',
        'coalesce(vp_by_cc.ccNoVotes, 0) as cc_no_votes',
        'coalesce(vp_by_cc.ccAbstainVotes, 0) as cc_abstain_votes',
        'prev_gov_action.index as prev_gov_action_index',
        "encode(prev_gov_action_tx.hash, 'hex') as prev_gov_action_tx_hash",
      ])
      .where('gov_action_proposal.expiration > :epoch', { epoch: 0 })
      .leftJoin(
        'treasury_withdrawal',
        'treasury_withdrawal',
        'gov_action_proposal.id = treasury_withdrawal.gov_action_proposal_id',
      )
      .leftJoin(
        'stake_address',
        'stake_address',
        'stake_address.id = treasury_withdrawal.stake_address_id',
      )
      .leftJoin(
        (subQuery) => {
          return subQuery
            .select([
              `(Max(end_time) - Min(end_time)) / (Max(no) - Min(no)) AS epoch_duration`,
              'Max(no) AS last_epoch_no',
              'Max(end_time) AS last_epoch_end_time',
            ])
            .from('epoch', 'epoch');
        },
        'epoch_utils',
        '1 = 1',
      )
      .leftJoin(
        'always_no_confidence_voting_power',
        'always_no_confidence_voting_power',
        '1 = 1',
      )
      .leftJoin(
        'always_abstain_voting_power',
        'always_abstain_voting_power',
        '1 = 1',
      )
      .leftJoin('tx', 'creator_tx', 'creator_tx.id = gov_action_proposal.tx_id')
      .leftJoin(
        'block',
        'creator_block',
        'creator_block.id = creator_tx.block_id',
      )
      .leftJoin(
        'voting_anchor',
        'voting_anchor',
        'voting_anchor.id = gov_action_proposal.voting_anchor_id',
      )
      .leftJoin(
        'param_proposal',
        'proposal_params',
        'gov_action_proposal.param_proposal = proposal_params.id',
      )
      .leftJoin(
        'off_chain_vote_data',
        'off_chain_vote_data',
        'off_chain_vote_data.voting_anchor_id = voting_anchor.id',
      )
      .leftJoin(
        'off_chain_vote_gov_action_data',
        'off_chain_vote_gov_action_data',
        'off_chain_vote_gov_action_data.off_chain_vote_data_id = off_chain_vote_data.id',
      )
      .leftJoin(
        'voting_procedure',
        'voting_procedure',
        'voting_procedure.gov_action_proposal_id = gov_action_proposal.id',
      )
      .leftJoin(
        (subQuery) => {
          return subQuery
            .select([
              '*',
              'ROW_NUMBER() OVER (PARTITION BY hash_id ORDER BY epoch_no DESC) AS rn',
            ])
            .from('drep_distr', 'drep_distr');
        },
        'ldd_drep',
        'ldd_drep.hash_id = voting_procedure.drep_voter AND ldd_drep.rn = 1',
      )
      .leftJoin(
        (subQuery) => {
          return subQuery
            .select([
              'gov_action_proposal_id',
              "SUM(CASE WHEN vote = 'Yes' THEN 1 ELSE 0 END) AS poolYesVotes",
              "SUM(CASE WHEN vote = 'No' THEN 1 ELSE 0 END) AS poolNoVotes",
              "SUM(CASE WHEN vote = 'Abstain' THEN 1 ELSE 0 END) AS poolAbstainVotes",
            ])
            .from('voting_procedure', 'voting_procedure')
            .where('pool_voter IS NOT NULL')
            .groupBy('gov_action_proposal_id');
        },
        'vp_by_pool',
        'gov_action_proposal.id = vp_by_pool.gov_action_proposal_id',
      )
      .leftJoin(
        (subQuery) => {
          return subQuery
            .select([
              'gov_action_proposal_id',
              "SUM(CASE WHEN vote = 'Yes' THEN 1 ELSE 0 END) AS ccYesVotes",
              "SUM(CASE WHEN vote = 'No' THEN 1 ELSE 0 END) AS ccNoVotes",
              "SUM(CASE WHEN vote = 'Abstain' THEN 1 ELSE 0 END) AS ccAbstainVotes",
            ])
            .from('voting_procedure', 'voting_procedure')
            .where('committee_voter IS NOT NULL')
            .groupBy('gov_action_proposal_id');
        },
        'vp_by_cc',
        'gov_action_proposal.id = vp_by_cc.gov_action_proposal_id',
      )
      .leftJoin(
        'gov_action_proposal',
        'prev_gov_action',
        'gov_action_proposal.prev_gov_action_proposal = prev_gov_action.id',
      )
      .leftJoin(
        'tx',
        'prev_gov_action_tx',
        'prev_gov_action.tx_id = prev_gov_action_tx.id',
      )
      .groupBy('gov_action_proposal.id')
      .addGroupBy('stake_address.view')
      .addGroupBy('treasury_withdrawal.amount')
      .addGroupBy('creator_block.epoch_no')
      .addGroupBy('off_chain_vote_gov_action_data.title')
      .addGroupBy('off_chain_vote_gov_action_data.abstract')
      .addGroupBy('off_chain_vote_gov_action_data.motivation')
      .addGroupBy('off_chain_vote_gov_action_data.rationale')
      .addGroupBy('vp_by_pool.poolYesVotes')
      .addGroupBy('vp_by_pool.poolNoVotes')
      .addGroupBy('vp_by_pool.poolAbstainVotes')
      .addGroupBy('vp_by_cc.ccYesVotes')
      .addGroupBy('vp_by_cc.ccNoVotes')
      .addGroupBy('vp_by_cc.ccAbstainVotes')
      .addGroupBy('gov_action_proposal.index')
      .addGroupBy('creator_tx.hash')
      .addGroupBy('creator_block.time')
      .addGroupBy('epoch_utils.epoch_duration')
      .addGroupBy('epoch_utils.last_epoch_no')
      .addGroupBy('epoch_utils.last_epoch_end_time')
      .addGroupBy('proposal_params')
      .addGroupBy('voting_anchor.url')
      .addGroupBy('voting_anchor.data_hash')
      .addGroupBy('always_no_confidence_voting_power.amount')
      .addGroupBy('always_abstain_voting_power.amount')
      .addGroupBy('prev_gov_action.index')
      .addGroupBy('prev_gov_action_tx.hash');

    // TODO: Implement sorting, filtering and searching

    // TODO: Implement pagination
    const total = await baseQuery.getCount();
    // const skip = page * pageSize;
    const govActionProposals = await baseQuery
      // .skip(skip)
      // .take(pageSize)
      .getRawMany();
    return {
      page,
      pageSize,
      total,
      elements: govActionProposals.map(this.mapGovernanceActionProposals),
    };
  }

  async getProposal(proposalId: string, drepId?: string) {
    console.log({ proposalId, drepId });
    return exampleProposalList.find(
      (proposal) => proposal.txHash === proposalId,
    );
  }

  private mapGovernanceActionProposals(
    govActionProposal: RawQueryGovernanceActionProposalType,
  ): GovernanceActionProposalType {
    return {
      id: govActionProposal.gov_action_proposal_id,
      txHash: govActionProposal.tx_hash,
      index: parseInt(govActionProposal.gov_action_proposal_index),
      type: govActionProposal.gov_action_proposal_type,
      details: govActionProposal.details,
      expiryDate: govActionProposal.expiry_date,
      expiryEpochNo: govActionProposal.expiry_epoch_no,
      createdDate: govActionProposal.created_date,
      createdEpochNo: govActionProposal.created_epoch_no,
      url: govActionProposal.url,
      metadataHash: govActionProposal.metadata_hash,
      protocolParams: govActionProposal.protocol_params,
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
