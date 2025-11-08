import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';



export class InventorySearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'inventory ID' })
  @IsOptional()
  @IsNumber()
  inventoryId?: number;


  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}