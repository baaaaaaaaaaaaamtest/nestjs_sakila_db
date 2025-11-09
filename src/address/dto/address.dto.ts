import { Expose, Type } from 'class-transformer';
import { FilmDto } from '../../film/dto/film.dto';
import { CityDto } from '../../city/dto/city.dto';
import { CustomerDto } from '../../customer/dto/customer.dto';
import { StoreDto } from '../../store/dto/store.dto';
import { StaffDto } from '../../staff/dto/staff.dto';


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


  @Expose({ name: 'city' })
  @Type(() => CityDto)
  city: CityDto;

  @Expose({ name: 'customers' })
  @Type(() => CustomerDto)
  customers: CustomerDto[];

  @Expose({ name: 'stores' })
  @Type(() => StoreDto)
  stores: StoreDto[];

  @Expose({ name: 'staff' })
  @Type(() => StaffDto)
  staff: StaffDto[];
}