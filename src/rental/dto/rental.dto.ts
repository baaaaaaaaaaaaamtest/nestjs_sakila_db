import { Expose, Type } from 'class-transformer';
import {CustomerDto} from "../../customer/dto/customer.dto";
import { InventoryDto } from '../../inventory/dto/inventory.dto';
import { PaymentDto } from '../../payment/payment/payment.dto';

export class RentalDto {
  @Expose({ name: 'rentalId' })
  rentalId: number;

  @Expose({ name: 'rentalDate' })
  rentalDate: Date;

  @Expose({ name: 'returnDate' })
  returnDate: Date;

  @Expose({ name: 'customer' })
  @Type(() => CustomerDto)
  customer: CustomerDto;

  @Expose({ name: 'inventory' })
  @Type(() => InventoryDto)
  inventory: InventoryDto;

  @Expose({ name: 'payments' })
  @Type(() => PaymentDto)
  payments: PaymentDto[];
}
