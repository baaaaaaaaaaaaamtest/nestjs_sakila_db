import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class CategorySearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'category ID' })
  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @ApiPropertyOptional({ description: 'category name' })
  @IsOptional()
  @IsString()
  name?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}