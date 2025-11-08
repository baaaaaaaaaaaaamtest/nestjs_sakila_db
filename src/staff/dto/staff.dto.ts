import { Expose, Type } from 'class-transformer';
import { PaymentDto } from '../../payment/payment/payment.dto';
import { RentalDto } from '../../rental/dto/rental.dto';
import { AddressDto } from '../../address/dto/address.dto';


export class StaffDto {
  @Expose({ name: 'staffId' })
  staffId: number;

  @Expose({ name: 'firstName' })
  firstName: string;

  @Expose({ name: 'lastName' })
  lastName: string;

  // @Expose({ name: 'picture' })
  // picture: Buffer;

  @Expose({ name: 'email' })
  email: string;

  @Expose({ name: 'active' })
  active: boolean;

  @Expose({ name: 'username' })
  username: string;

  // @Expose({ name: 'stores' })
  // @Type(() => StoreDto)
  // stores: StoreDto;

  @Expose({ name: 'payments' })
  @Type(() => PaymentDto)
  payments: PaymentDto[];

  @Expose({ name: 'rentals' })
  @Type(() => RentalDto)
  rentals: RentalDto[];

  @Expose({ name: 'address' })
  @Type(() => AddressDto)
  address: AddressDto;
}