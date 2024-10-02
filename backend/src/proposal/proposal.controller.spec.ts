import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';
import { ProposalSort, ProposalType } from '../types/proposal';
import { GovActionProposal } from '../entities/govActionProposal.entity';

// TODO: Extend tests for ProposalController to cover all scenarios such as querying proposals by type, sorting, and searching.
describe('ProposalController', () => {
  let controller: ProposalController;
  let mockRepository;

  beforeEach(async () => {
    mockRepository = {
      createQueryBuilder: jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        from: jest.fn().mockReturnThis(),
        leftJoin: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        groupBy: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        addCommonTableExpression: jest.fn().mockReturnThis(),
        addGroupBy: jest.fn().mockReturnThis(),
        getRawMany: jest.fn().mockResolvedValue([]),
        getCount: jest.fn().mockResolvedValue(0),
      })),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProposalController],
      providers: [
        ProposalService,
        {
          provide: getRepositoryToken(GovActionProposal),
          useValue: mockRepository,
        },
      ],
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
  });

  it('should return a proposal by ID', async () => {
    const proposal = await controller.getProposal('12abcd', '123');
    expect(proposal).toBeDefined();
    expect(proposal.txHash).toBe('12abcd');
  });
});
