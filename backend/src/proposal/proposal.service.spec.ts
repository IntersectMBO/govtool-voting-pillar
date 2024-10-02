import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ProposalService } from './proposal.service';
import { ProposalType, ProposalSort } from '../types/proposal';
import { GovActionProposal } from '../entities/govActionProposal.entity';

// TODO: Extend tests for ProposalService to cover all scenarios such as querying proposals by type, sorting, and searching.
describe('ProposalService', () => {
  let service: ProposalService;
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
      providers: [
        ProposalService,
        {
          provide: getRepositoryToken(GovActionProposal),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProposalService>(ProposalService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getProposalList', () => {
    it('should return a list of proposals', async () => {
      const params = {
        type: ProposalType.InfoAction,
        sort: ProposalSort.NewestCreated,
        page: 0,
        pageSize: 10,
        drepId: '123',
        search: 'cardano',
      };

      const proposals = await service.getProposalList(params);

      expect(proposals.page).toBe(0);
      expect(proposals.pageSize).toBe(10);
    });

    it('should return an empty list if no proposals are found', async () => {
      const proposals = await service.getProposalList({
        page: 0,
        pageSize: 10,
      });

      expect(proposals.page).toBe(0);
      expect(proposals.pageSize).toBe(10);
      expect(proposals.elements.length).toBe(0);
    });
  });

  describe('getProposal', () => {
    it('should return a proposal by ID', async () => {
      const proposal = await service.getProposal('12abcd', '123');

      expect(proposal).toBeDefined();
      expect(proposal.txHash).toBe('12abcd');
    });

    it('should return undefined if proposal is not found', async () => {
      const proposal = await service.getProposal('nonexistent', '123');

      expect(proposal).toBeUndefined();
    });
  });
});
