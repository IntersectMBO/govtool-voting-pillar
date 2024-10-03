import { IsArray, IsEnum, IsOptional, IsString, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export enum ProposalType {
  ParameterChange = 'ParameterChange',
  HardForkInitiation = 'HardForkInitiation',
  TreasuryWithdrawals = 'TreasuryWithdrawals',
  NoConfidence = 'NoConfidence',
  NewCommittee = 'NewCommittee',
  NewConstitution = 'NewConstitution',
  InfoAction = 'InfoAction',
}

export enum ProposalSort {
  SoonestToExpire = 'SoonestToExpire',
  NewestCreated = 'NewestCreated',
  MostYesVotes = 'MostYesVotes',
}

export class ProposalListDto {
  @IsOptional()
  @IsArray()
  @IsEnum(ProposalType, { each: true })
  @ApiPropertyOptional({ isArray: true, enum: ProposalType })
  type?: ProposalType[];

  @IsOptional()
  @IsEnum(ProposalSort)
  @ApiPropertyOptional({ enum: ProposalSort })
  sort?: ProposalSort;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: Number })
  page?: number;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: Number })
  pageSize?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    type: String,
    description:
      'Search by title, abstract, motivation, rationale, or proposalId',
  })
  search?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    type: String,
    format: 'hex',
    description: 'Filter by DRep ID (hex)',
  })
  drepId?: string;
}
