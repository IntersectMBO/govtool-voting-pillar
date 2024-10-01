import { Injectable } from '@nestjs/common';
import { GetProposalListParams } from '../types/proposal';

// Mock, to be replaced with actual data
export const proposalList = [
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
    title: null,
    abstract: null,
    motivation: null,
    rationale: null,
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
  async getProposalList(params: GetProposalListParams) {
    console.log({ params });
    return {
      page: 0,
      pageSize: 10,
      total: proposalList.length,
      elements: proposalList,
    };
  }

  async getProposal(proposalId: string, drepId?: string) {
    console.log({ proposalId, drepId });
    return proposalList.find((proposal) => proposal.txHash === proposalId);
  }
}
