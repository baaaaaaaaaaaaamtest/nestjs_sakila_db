import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CityService } from './city.service';
import { CitySearchDto } from './dto/citySearch.dto';
import { CitySearchResponseDto } from './dto/citySearchResponse.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService:CityService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search category by variable criteria' })
  @ApiResponse({
    status: 200,
    description: 'city found',
    type: CitySearchResponseDto,
  })
  @ApiResponse({ status: 404, description: 'No city found' })
  async search(@Query() filter: CitySearchDto): Promise<object> {
    return await this.cityService.searchCategory(filter);
  }
}