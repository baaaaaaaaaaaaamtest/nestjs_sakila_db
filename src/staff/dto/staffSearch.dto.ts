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

export class StaffSearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'staff ID' })
  @IsOptional()
  @IsNumber()
  staffId?: number;

  @ApiPropertyOptional({ title: 'staff name' })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiPropertyOptional({ title: 'staff name' })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiPropertyOptional({ title: 'email' })
  @IsOptional()
  @IsString()
  email?: string;

  @Type(() => Boolean)
  @ApiPropertyOptional({ title: 'active' })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ title: 'username' })
  @IsOptional()
  @IsString()
  username?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}