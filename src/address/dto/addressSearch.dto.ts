import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class AddressSearchDto{
  @Type(() => Number)
  @ApiPropertyOptional({ description: 'address ID' })
  @IsOptional()
  @IsNumber()
  addressId?: number;

  @ApiPropertyOptional({ description: 'address' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'address2' })
  @IsOptional()
  @IsString()
  address2?: string;

  @ApiPropertyOptional({ description: 'district' })
  @IsOptional()
  @IsString()
  district?: string;

  @ApiPropertyOptional({ description: 'postalCode' })
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiPropertyOptional({ description: 'phone' })
  @IsOptional()
  @IsString()
  phone?: string;

  // @ApiPropertyOptional({ description: 'location' })
  // @IsOptional()
  // @IsString()
  // location?: string;

  @Type(() => Number)
  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  currentPage: number;
}