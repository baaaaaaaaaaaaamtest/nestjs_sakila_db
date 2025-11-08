import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {PaymentService} from "./payment.service";
import {PaymentSearchResponseDto} from "./payment/paymentSearchResponse.dto";
import {PaymentSearchDto} from "./payment/paymentSearch.dto";


@Controller('payment')
export class PaymentController {
    constructor(private readonly service: PaymentService) {}

    @Get('search')
    @ApiOperation({ summary: 'Search language by variable criteria' })
    @ApiResponse({
        status: 200,
        description: 'payment found',
        type: PaymentSearchResponseDto,
    })
    async getCountry(@Query() filter: PaymentSearchDto): Promise<object> {
        return await this.service.searchCategory(filter);
    }
}