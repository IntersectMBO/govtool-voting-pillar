import { Controller, Get, Param } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

import { ProposalService, proposalList } from './proposal.service';
import { GetProposalListParams } from '../types/proposal';

@ApiTags('proposal')
@Controller('proposal')
export class ProposalController {
  constructor(private proposalService: ProposalService) {}

  @Get('list')
  @ApiOperation({ summary: 'Get a list of proposals' })
  @ApiParam({
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
  @ApiParam({
    name: 'sort',
    enum: ['SoonestToExpire', 'NewestCreated', 'MostYesVotes'],
    required: false,
  })
  @ApiParam({ name: 'page', type: 'number', required: false })
  @ApiParam({ name: 'pageSize', type: 'number', required: false })
  @ApiParam({
    name: 'drepId',
    type: 'string',
    format: 'hex',
    required: false,
  })
  @ApiParam({ name: 'search', required: false })
  @ApiResponse({
    status: 200,
    description: 'List of proposals',
    example: {
      page: 0,
      pageSize: 10,
      total: proposalList.length,
      elements: proposalList,
    },
  })
  async getProposalList(@Param() params: GetProposalListParams) {
    return this.proposalService.getProposalList(params);
  }

  @Get('get/:proposalId')
  @ApiOperation({ summary: 'Get a proposal by ID' })
  @ApiParam({
    name: 'proposalId',
    type: 'string',
    format: 'hash#index',
    required: true,
  })
  @ApiParam({
    name: 'drepId',
    type: 'string',
    format: 'hex',
    required: false,
  })
  @ApiResponse({
    status: 200,
    description: 'Proposal',
    example: proposalList[0],
  })
  async getProposal(
    @Param('proposalId') proposalId: string,
    @Param('drepId') drepId?: string,
  ) {
    return this.proposalService.getProposal(proposalId, drepId);
  }
}
