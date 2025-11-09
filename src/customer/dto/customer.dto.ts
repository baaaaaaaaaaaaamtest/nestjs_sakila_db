import { Expose, Type } from 'class-transformer';
import { AddressDto } from '../../address/dto/address.dto';
import { StoreDto } from '../../store/dto/store.dto';
import { PaymentDto } from '../../payment/payment/payment.dto';
import { RentalDto } from '../../rental/dto/rental.dto';


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

  @Expose({ name: 'store' })
  @Type(() => StoreDto)
  store: StoreDto;

  @Expose({ name: 'payments' })
  @Type(() => PaymentDto)
  payments: PaymentDto[];

  @Expose({ name: 'rentals' })
  @Type(() => RentalDto)
  rentals: RentalDto[];

}