import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class StoreSearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'store ID' })
  @IsOptional()
  @IsNumber()
  storeId?: number;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}