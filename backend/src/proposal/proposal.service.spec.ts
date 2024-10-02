import { Test, TestingModule } from '@nestjs/testing';

import { ProposalService } from './proposal.service';
import { ProposalType, ProposalSort } from '../types/proposal';

describe('ProposalService', () => {
  let service: ProposalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProposalService],
    }).compile();

    service = module.get<ProposalService>(ProposalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a list of proposals', async () => {
    const proposals = await service.getProposalList({
      type: ProposalType.InfoAction,
      sort: ProposalSort.NewestCreated,
      page: 0,
      pageSize: 10,
      drepId: '123',
      search: 'cardano',
    });
    expect(proposals.page).toBe(0);
    expect(proposals.pageSize).toBe(10);
    expect(proposals.total).toBeGreaterThan(0);
    expect(proposals.elements.length).toBeGreaterThan(0);
  });

  it('should return a proposal by ID', async () => {
    const proposal = await service.getProposal('12abcd', '123');
    expect(proposal).toBeDefined();
    expect(proposal.txHash).toBe('12abcd');
  });
});
