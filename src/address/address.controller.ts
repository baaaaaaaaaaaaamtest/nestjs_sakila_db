import { ActorService } from '../actor/actor.service';
import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { AddressSearchDto } from './dto/addressSearch.dto';
import { AddressService } from './address.service';
import { AddressSearchResponseDto } from './dto/addressSearchResponse.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly service: AddressService) {
  }

  // AND Search
  @Get('search')
  @ApiOperation({ summary: 'Search address by variable criteria' })
  @ApiResponse({ status: 200, description: 'address found', type: [AddressSearchResponseDto] })
  @ApiResponse({ status: 404, description: 'No address found' })
  async search(@Query() filter: AddressSearchDto): Promise<object> {
    return await this.service.searchAddresses(filter);
  }

}