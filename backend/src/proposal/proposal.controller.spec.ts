import { Test, TestingModule } from '@nestjs/testing';

import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';
import { ProposalSort, ProposalType } from '../types/proposal';

describe('ProposalController', () => {
  let controller: ProposalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProposalController],
      providers: [ProposalService],
    }).compile();

    controller = module.get<ProposalController>(ProposalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a list of proposals', async () => {
    const proposals = await controller.getProposalList({
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
    const proposal = await controller.getProposal('12abcd', '123');
    expect(proposal).toBeDefined();
    expect(proposal.txHash).toBe('12abcd');
  });
});
