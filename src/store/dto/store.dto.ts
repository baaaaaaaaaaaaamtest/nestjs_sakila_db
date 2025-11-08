import { Expose, Type } from 'class-transformer';
import { PaymentDto } from '../../payment/payment/payment.dto';
import { RentalDto } from '../../rental/dto/rental.dto';
import { AddressDto } from '../../address/dto/address.dto';
import { InventoryDto } from '../../inventory/dto/inventory.dto';
import { CustomerDto } from '../../customer/dto/customer.dto';
import { StaffDto } from '../../staff/dto/staff.dto';


export class StoreDto {
  @Expose({ name: 'storeId' })
  storeId: number;

  @Expose({ name: 'inventories' })
  @Type(() => InventoryDto)
  inventories: InventoryDto[];

  @Expose({ name: 'customers' })
  @Type(() => CustomerDto)
  customers: CustomerDto[];

  @Expose({ name: 'managers' })
  @Type(() => StaffDto)
  managers: StaffDto[];

  @Expose({ name: 'address' })
  @Type(() => AddressDto)
  address: AddressDto;


}