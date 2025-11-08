import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CustomerSearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'customer ID' })
  @IsOptional()
  @IsNumber()
  customerId?: number;

  @ApiPropertyOptional({ description: 'first name' })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiPropertyOptional({ description: 'last name' })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiPropertyOptional({ description: 'email' })
  @IsOptional()
  @IsString()
  email?: string;

  @Type(() => Boolean)
  @ApiPropertyOptional({ description: 'active status' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}