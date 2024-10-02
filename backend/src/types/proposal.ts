export enum ProposalType {
  ParameterChange = 'ParameterChange',
  HardForkInitiation = 'HardForkInitiation',
  TreasuryWithdrawals = 'TreasuryWithdrawals',
  NoConfidence = 'NoConfidence',
  NewCommittee = 'NewCommittee',
  NewConstitution = 'NewConstitution',
  InfoAction = 'InfoAction',
}

export enum ProposalSort {
  SoonestToExpire = 'SoonestToExpire',
  NewestCreated = 'NewestCreated',
  MostYesVotes = 'MostYesVotes',
}

export type GetProposalListParams = {
  type?: ProposalType;
  sort?: ProposalSort;
  page?: number;
  pageSize?: number;
  drepId?: string;
  search?: string;
};

export type RawQueryGovernanceActionProposalType = {
  gov_action_proposal_id: string;
  gov_action_proposal_index: string;
  gov_action_proposal_type: ProposalType;
  gov_action_proposal_expiration: number;
  tx_hash: string;
  details: any;
  expiry_date: string;
  expiry_epoch_no: number;
  created_date: string;
  created_epoch_no: number;
  url: string;
  metadata_hash: string;
  protocol_params: any;
  title: string | null;
  abstract: string | null;
  motivation: string | null;
  rationale: string | null;
  yes_votes: string;
  no_votes: string;
  abstain_votes: string;
  pool_yes_votes: string;
  pool_no_votes: string;
  pool_abstain_votes: string;
  cc_yes_votes: string;
  cc_no_votes: string;
  cc_abstain_votes: string;
  prev_gov_action_index: string | null;
  prev_gov_action_tx_hash: string | null;
};

export type GovernanceActionProposalType = {
  id: string;
  txHash: string;
  index: number;
  type: ProposalType;
  details: any;
  expiryDate: string;
  expiryEpochNo: number;
  createdDate: string;
  createdEpochNo: number;
  url: string;
  metadataHash: string;
  protocolParams: any;
  title: string | null;
  abstract: string | null;
  motivation: string | null;
  rationale: string | null;
  dRepYesVotes: number;
  dRepNoVotes: number;
  dRepAbstainVotes: number;
  poolYesVotes: number;
  poolNoVotes: number;
  poolAbstainVotes: number;
  ccYesVotes: number;
  ccNoVotes: number;
  ccAbstainVotes: number;
  prevGovActionIndex: number | null;
  prevGovActionTxHash: string | null;
};
