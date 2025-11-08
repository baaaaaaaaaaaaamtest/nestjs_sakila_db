import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StaffService } from './staff.service';
import { StaffSearchResponseDto } from './dto/staffSearchResponse.dto';
import { StaffSearchDto } from './dto/staffSearch.dto';


@Controller('staff')
export class StaffController {
  constructor(private readonly service: StaffService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search staff by variable criteria' })
  @ApiResponse({
    status: 200,
    description: 'language found',
    type: StaffSearchResponseDto,
  })
  async getCountry(@Query() filter: StaffSearchDto): Promise<object> {
    return await this.service.searchCategory(filter);
  }
}