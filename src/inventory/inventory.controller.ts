import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FilmSearchResponseDto } from '../film/dto/filmSearchResponse.dto';
import { InventoryService } from './inventory.service';
import { InventorySearchDto } from './dto/inventorySearch.dto';


@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search inventory by variable criteria' })
  @ApiResponse({
    status: 200,
    description: 'inventory found',
    type: FilmSearchResponseDto,
  })
  async getCountry(@Query() filter: InventorySearchDto): Promise<object> {
    return await this.service.searchCategory(filter);
  }
}