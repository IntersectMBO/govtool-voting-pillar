import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';

import { ProposalService } from './proposal.service';
import { ProposalListDto } from './proposal.dto';

@ApiTags('proposal')
@Controller('proposal')
export class ProposalController {
  constructor(private proposalService: ProposalService) {}

  @Get('list')
  @ApiOperation({ summary: 'Get a list of proposals' })
  @ApiQuery({
    name: 'type',
    enum: [
      'ParameterChange',
      'HardForkInitiation',
      'TreasuryWithdrawals',
      'NoConfidence',
      'NewCommittee',
      'NewConstitution',
      'InfoAction',
    ],
    required: false,
  })
  @ApiQuery({
    name: 'sort',
    enum: ['SoonestToExpire', 'NewestCreated', 'MostYesVotes'],
    required: false,
  })
  @ApiQuery({ name: 'page', type: 'number', required: false })
  @ApiQuery({ name: 'pageSize', type: 'number', required: false })
  @ApiQuery({
    name: 'drepId',
    type: 'string',
    required: false,
  })
  @ApiQuery({ name: 'search', required: false })
  @ApiResponse({
    status: 200,
    description: 'List of proposals',
    example: {
      page: 0,
      pageSize: 10,
      total: 100,
      elements: [
        {
          id: 123,
          txHash:
            '7c8c6c4720c5e83b00f065d62b366f20c8c309f376a55a202b1fc5f114c2fba1',
          index: 123,
          type: 'TreasuryWithdrawals',
          details: {
            'Reward Address':
              '7c8c6c4720c5e83b00f065d62b366f20c8c309f376a55a202b1fc5f114c2fba1',
            Amount: 100,
          },
          expiryDate: '2021-01-01',
          expiryEpochNo: 1000,
          createdDate: '2021-01-01',
          createdEpochNo: 1,
          url: 'https://example.com',
          metadataHash:
            '7c8c6c4720c5e83b00f065d62b366f20c8c309f376a55a202b1fc5f114c2fba1',
          protocolParams: null,
          title: 'Proposal Title',
          abstract: 'Proposal Abstract',
          motivation: 'Proposal Motivation',
          rationale: 'Proposal Rationale',
          dRepYesVotes: 100,
          dRepNoVotes: 100,
          dRepAbstainVotes: 100,
          poolYesVotes: 100,
          poolNoVotes: 100,
          poolAbstainVotes: 100,
          ccYesVotes: 100,
          ccNoVotes: 100,
          ccAbstainVotes: 100,
        },
      ],
    },
  })
  async getProposalList(@Query() query: ProposalListDto) {
    return this.proposalService.listProposals(query);
  }

  @Get('get/:proposalId')
  @ApiOperation({ summary: 'Get a proposal by id' })
  @ApiQuery({ name: 'proposalId', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'Proposal details',
    example: {
      id: 123,
      txHash:
        '7c8c6c4720c5e83b00f065d62b366f20c8c309f376a55a202b1fc5f114c2fba1',
      index: 123,
      type: 'TreasuryWithdrawals',
      details: {
        'Reward Address':
          '7c8c6c4720c5e83b00f065d62b366f20c8c309f376a55a202b1fc5f114c2fba1',
        Amount: 100,
      },
      expiryDate: '2021-01-01',
      expiryEpochNo: 1000,
      createdDate: '2021-01-01',
      createdEpochNo: 1,
      url: 'https://example.com',
      metadataHash:
        '7c8c6c4720c5e83b00f065d62b366f20c8c309f376a55a202b1fc5f114c2fba1',
      protocolParams: null,
      title: 'Proposal Title',
      abstract: 'Proposal Abstract',
      motivation: 'Proposal Motivation',
      rationale: 'Proposal Rationale',
      dRepYesVotes: 100,
      dRepNoVotes: 100,
      dRepAbstainVotes: 100,
      poolYesVotes: 100,
      poolNoVotes: 100,
      poolAbstainVotes: 100,
      ccYesVotes: 100,
      ccNoVotes: 100,
      ccAbstainVotes: 100,
    },
  })
  async getProposalById(@Param('proposalId') proposalId: string) {
    return this.proposalService.getProposalById(proposalId);
  }

  @Get('survey/:proposalId')
  @ApiOperation({ summary: 'Get survey linkage and survey details for a proposal' })
  @ApiQuery({ name: 'proposalId', type: 'string' })
  async getProposalSurvey(@Param('proposalId') proposalId: string) {
    return this.proposalService.getProposalSurvey(proposalId);
  }

  @Get('survey/:proposalId/tally')
  @ApiOperation({ summary: 'Get survey tally for a proposal' })
  @ApiQuery({ name: 'proposalId', type: 'string' })
  @ApiQuery({
    name: 'weighting',
    enum: ['CredentialBased', 'StakeBased'],
    required: false,
  })
  async getProposalSurveyTally(
    @Param('proposalId') proposalId: string,
    @Query('weighting') weighting: 'CredentialBased' | 'StakeBased' = 'CredentialBased',
  ) {
    return this.proposalService.getProposalSurveyTally(proposalId, weighting);
  }
}
