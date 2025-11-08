import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {CountrySearchDto} from "./dto/countrySearch.dto";
import {CountryService} from "./country.service";
import {CountrySearchResponseDto} from "./dto/countrySearchResponse.dto";


@Controller
('country')
export class CountryController {
    constructor(private readonly service:CountryService ) {}


    @Get('search')
    @ApiOperation({ summary: 'Search country by variable criteria' })
    @ApiResponse({
        status: 200,
        description: 'country found',
        type: CountrySearchResponseDto,
    })
    async getCountry(@Query() filter: CountrySearchDto): Promise<object> {
        return await this.service.searchCategory(filter);

    }
}