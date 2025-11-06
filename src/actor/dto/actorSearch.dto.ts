import { IsOptional, IsNumber, IsString, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ActorSearchDto {
  @Type(() => Number)
  @ApiPropertyOptional({ description: 'Actor ID' })
  @IsOptional()
  @IsNumber()
  actorId?: number;

  @ApiPropertyOptional({ description: 'firstName' })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiPropertyOptional({ description: 'lastName' })
  @IsOptional()
  @IsString()
  lastName?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}