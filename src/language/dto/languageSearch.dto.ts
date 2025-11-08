import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class LanguageSearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'language ID' })
  @IsOptional()
  @IsNumber()
  languageId?: number;

  @ApiPropertyOptional({ title: 'language name' })
  @IsOptional()
  @IsString()
  name?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}