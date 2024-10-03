import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';
import { GovActionProposal } from '../entities/govActionProposal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GovActionProposal])],
  controllers: [ProposalController],
  providers: [ProposalService],
})
export class ProposalModule {}
