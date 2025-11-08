import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StoreSearchDto } from './dto/storeSearch.dto';
import { StoreSearchResponseDto } from './dto/storeSearchResponse.dto';
import { StoreService } from './store.service';


@Controller('store')
export class StoreController {
  constructor(private readonly service: StoreService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search store by variable criteria' })
  @ApiResponse({
    status: 200,
    description: 'store found',
    type: StoreSearchResponseDto,
  })
  async getCountry(@Query() filter: StoreSearchDto): Promise<object> {
    return await this.service.searchCategory(filter);
  }
}