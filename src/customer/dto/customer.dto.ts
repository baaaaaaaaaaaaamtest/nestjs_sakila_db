import { Expose, Type } from 'class-transformer';
import { AddressDto } from '../../address/dto/address.dto';


export class CustomerDto {
  @Expose({ name: 'customerId' })
  customerId: number;

  @Expose({ name: 'firstName' })
  firstName: string;

  @Expose({ name: 'lastName' })
  lastName: string;

  @Expose({ name: 'email' })
  email: string;

  @Expose({ name: 'active' })
  active: boolean;

  @Expose({ name: 'address' })
  @Type(() => AddressDto)
  address: AddressDto;

  // @Expose({ name: 'cities' })
  // @Type(() => CityDto)
  // cities: CityDto[];
}