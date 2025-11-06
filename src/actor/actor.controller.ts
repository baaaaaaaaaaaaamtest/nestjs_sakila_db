import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { ActorSearchDto } from './dto/actorSearch.dto';
import { ActorSearchResponseDto } from './dto/actorSearchResponse.dto';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}


  // AND Search
  @Get('search')
  @ApiOperation({ summary: 'Search actors by variable criteria' })
  @ApiResponse({ status: 200, description: 'Actors found', type: ActorSearchResponseDto })
  @ApiResponse({ status: 404, description: 'No actors found' })
  async search(@Query() filter: ActorSearchDto): Promise<object> {
    return await this.actorService.searchActors(filter);
  }
}
