import { Controller, Get, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CustomerSearchResponseDto } from './dto/customerSearchResponse.dto';
import { CustomerSearchDto } from './dto/customerSearch.dto';


@Controller('customer')
export class CustomerController {
  constructor(private readonly service:CustomerService ) {}

  @Get('search')
  @ApiOperation({ summary: 'Search customer by variable criteria' })
  @ApiResponse({
    status: 200,
    description: 'customer found',
    type: CustomerSearchResponseDto,
  })
  async getCountry(@Query() filter: CustomerSearchDto): Promise<object> {
    return await this.service.searchCategory(filter);

  }
}