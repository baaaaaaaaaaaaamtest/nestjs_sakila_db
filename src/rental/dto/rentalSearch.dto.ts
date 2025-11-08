import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class RentalSearchDto{

  @Type(() => Number)
  @ApiPropertyOptional({ description: 'rental ID' })
  @IsOptional()
  @IsNumber()
  rentalId?: number;

  @Type(() => Date)
  @ApiPropertyOptional({ title: 'rentalDate' })
  @IsOptional()
  @IsDate()
  rentalDate?: Date;

  @Type(() => Date)
  @ApiPropertyOptional({ title: 'returnDate' })
  @IsOptional()
  @IsDate()
  returnDate?: Date;


  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}