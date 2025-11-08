import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class PaymentSearchDto{

    @Type(() => Number)
    @ApiPropertyOptional({ description: 'payment ID' })
    @IsOptional()
    @IsNumber()
    paymentId?: number;

    @Type(() => Number)
    @ApiPropertyOptional({ title: 'amount' })
    @IsOptional()
    @IsNumber()
    amount?: number;

    @Type(() => Date)
    @ApiPropertyOptional({ title: 'paymentDate' })
    @IsOptional()
    @IsDate()
    paymentDate?: Date;

    @Type(() => Number)
    @ApiPropertyOptional({ example: 1 })
    @IsOptional()
    @IsInt()
    currentPage: number;
}