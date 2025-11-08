import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategorySearchResponseDto } from './dto/categorySearchResponse.dto';
import { CategorySearchDto } from './dto/categorySearch.dto';
import { CategoryService } from './category.service';


@Controller('category')
export class CategoryController {
  constructor(private readonly service:CategoryService ) {}

  // AND Search
  @Get('search')
  @ApiOperation({ summary: 'Search category by variable criteria' })
  @ApiResponse({ status: 200, description: 'Actors found', type: CategorySearchResponseDto })
  @ApiResponse({ status: 404, description: 'No actors found' })
  async search(@Query() filter: CategorySearchDto): Promise<object> {
    return await this.service.searchCategory(filter);
  }
}