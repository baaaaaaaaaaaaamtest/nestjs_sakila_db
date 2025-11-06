import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';


export class AddressDto {
  @Expose({ name: 'addressId' })
  addressId: number;

  @Expose({ name: 'address' })
  address: string;

  @Expose({ name: 'address2' })
  address2?: string;

  @Expose({ name: 'district' })
  district: string;

  @Expose({ name: 'phone' })
  phone: string;

  @Expose({ name: 'postalCode' })
  postalCode?: string;

  @Expose({ name: 'location' })
  location?: string;

  lastUpdate: Date;

  // cityId: FilmDto[];
}