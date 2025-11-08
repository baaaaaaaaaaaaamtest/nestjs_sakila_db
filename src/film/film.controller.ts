import { Controller, Get, Query } from '@nestjs/common';
import { FilmService } from './film.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FilmSearchResponseDto } from './dto/filmSearchResponse.dto';
import { FilmSearchDto } from './dto/filmSearch.dto';

@Controller('film')
export class FilmController {
  constructor(private readonly service: FilmService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search film by variable criteria' })
  @ApiResponse({
    status: 200,
    description: 'film found',
    type: FilmSearchResponseDto,
  })
  async getCountry(@Query() filter: FilmSearchDto): Promise<object> {
    return await this.service.searchCategory(filter);
  }
}
