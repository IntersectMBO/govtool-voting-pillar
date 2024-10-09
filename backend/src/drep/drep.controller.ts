import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DrepService } from './drep.service';

@ApiTags('drep')
@Controller('drep')
export class DrepController {
  constructor(private drepService: DrepService) {}

  @Get('get-voting-power/:drepId')
  @ApiOperation({ summary: 'Get voting power of a drep id' })
  @ApiQuery({ name: 'drepId', type: 'string', required: true })
  async getVotingPower(@Query('drepId') drepId: string) {
    return this.drepService.getVotingPower(drepId);
  }
}
