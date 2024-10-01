import { Module } from '@nestjs/common';
import { ProposalModule } from './proposal/proposal.module';

@Module({
  imports: [ProposalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
