import { Expose, Type } from 'class-transformer';
import { AddressDto } from '../../address/dto/address.dto';
import { CountryDto } from '../../country/dto/country.dto';


export class CityDto {
  @Expose({ name: 'cityId' })
  cityId: number;

  @Expose({ name: 'city' })
  city: string;

  @Expose({ name: 'country' })
  @Type(() => CountryDto)
  country: CountryDto;

  @Expose({ name: 'address' })
  @Type(() => AddressDto)
  address: AddressDto[];

}