import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LanguageService } from './language.service';
import { LanguageSearchDto } from './dto/languageSearch.dto';
import { LanguageSearchResponseDto } from './dto/languageSearchResponse.dto';


@Controller('language')
export class LanguageController {
  constructor(private readonly service: LanguageService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search language by variable criteria' })
  @ApiResponse({
    status: 200,
    description: 'language found',
    type: LanguageSearchResponseDto,
  })
  async getCountry(@Query() filter: LanguageSearchDto): Promise<object> {
    return await this.service.searchCategory(filter);
  }
}