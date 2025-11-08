import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class CountrySearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'country ID' })
  @IsOptional()
  @IsNumber()
  countryId?: number;

  @ApiPropertyOptional({ description: 'country name' })
  @IsOptional()
  @IsString()
  country?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}