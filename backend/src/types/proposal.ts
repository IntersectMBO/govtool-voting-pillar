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
