import { Controller, Get, Header, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SurveyService } from './survey.service';

@ApiTags('survey')
@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Get('definition/:txId/:index')
  @Header('Cache-Control', 'public, max-age=31536000, immutable')
  @ApiOperation({ summary: 'Get exact CIP-179 label 17 metadata CBOR' })
  @ApiResponse({ status: 200, description: 'CIP-179 transaction metadata' })
  @ApiResponse({ status: 400, description: 'Malformed survey reference' })
  @ApiResponse({ status: 404, description: 'Label 17 metadata not found' })
  getDefinition(
    @Param('txId') txId: string,
    @Param('index', ParseIntPipe) index: number,
  ) {
    return this.surveyService.getDefinition(txId, index);
  }
}
