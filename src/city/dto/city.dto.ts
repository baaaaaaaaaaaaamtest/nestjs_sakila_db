import { ApiProperty } from '@nestjs/swagger';
import { Country } from '../../country/country.entity';
import { Address } from '../../address/address.entity';
import { Expose, Type } from 'class-transformer';
import { AddressDto } from '../../address/dto/address.dto';


export class CityDto {
  @Expose({ name: 'cityId' })
  cityId: number;

  @Expose({ name: 'city' })
  city: string;

  // @Expose({ name: 'country' })
  country: Country;

  // @Expose({ name: 'address' })
  address: Address[];
}