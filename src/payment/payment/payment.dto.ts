import { Expose, Type } from 'class-transformer';
import {CustomerDto} from "../../customer/dto/customer.dto";

export class PaymentDto {
    @Expose({ name: 'paymentId' })
    paymentId: number;

    @Expose({ name: 'amount' })
    amount: number;

    @Expose({ name: 'paymentDate' })
    paymentDate: Date;

    @Expose({ name: 'customer' })
    @Type(() => CustomerDto)
    customer: CustomerDto;
}
