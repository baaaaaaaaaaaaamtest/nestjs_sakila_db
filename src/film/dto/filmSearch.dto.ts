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


export enum FilmRating {
  G = 'G',
  PG = 'PG',
  PG13 = 'PG-13',
  R = 'R',
  NC17 = 'NC-17',
}
export enum SpecialFeature {
  Trailers = 'Trailers',
  Commentaries = 'Commentaries',
  DeletedScenes = 'Deleted Scenes',
  BehindTheScenes = 'Behind the Scenes',
}


export class FilmSearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'film ID' })
  @IsOptional()
  @IsNumber()
  filmId?: number;

  @ApiPropertyOptional({ title: 'film title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'film description' })
  @IsOptional()
  @IsString()
  description?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'releaseYear' })
  @IsOptional()
  @IsNumber()
  releaseYear?: number;

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'rentalDuration' })
  @IsOptional()
  @IsNumber()
  rentalDuration?: number;

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'rentalRate' })
  @IsOptional()
  @IsNumber()
  rentalRate?: number;

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'length' })
  @IsOptional()
  @IsNumber()
  length?: number;

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'replacementCost' })
  @IsOptional()
  @IsNumber()
  replacementCost?: number;

  @ApiPropertyOptional({ description: '등급', enum: FilmRating})
  @IsOptional()
  @IsEnum(FilmRating)
  rating?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}