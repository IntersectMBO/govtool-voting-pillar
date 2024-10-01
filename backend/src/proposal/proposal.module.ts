import { Module } from '@nestjs/common';

import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';

@Module({
  controllers: [ProposalController],
  providers: [ProposalService],
})
export class ProposalModule {}
