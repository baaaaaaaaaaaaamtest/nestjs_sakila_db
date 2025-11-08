import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RentalService } from './rental.service';
import { RentalSearchResponseDto } from './dto/rentalSearchResponse.dto';
import { RentalSearchDto } from './dto/rentalSearch.dto';


@Controller('rental')
export class RentalController {
  constructor(private readonly service: RentalService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search language by variable criteria' })
  @ApiResponse({
    status: 200,
    description: 'payment found',
    type: RentalSearchResponseDto,
  })
  async getCountry(@Query() filter: RentalSearchDto): Promise<object> {
    return await this.service.searchCategory(filter);
  }
}