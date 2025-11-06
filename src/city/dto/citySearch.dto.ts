import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class CitySearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'city ID' })
  @IsOptional()
  @IsNumber()
  cityId?: number;

  @ApiPropertyOptional({ description: 'city name' })
  @IsOptional()
  @IsString()
  city?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}