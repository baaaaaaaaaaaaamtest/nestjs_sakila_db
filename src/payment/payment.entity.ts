import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { Staff } from '../staff/staff.entity';
import { Rental } from '../rental/rental.entity';


@Entity({ name: 'payment' })
export class Payment {
    @PrimaryGeneratedColumn({ name: 'payment_id', type: 'smallint', unsigned: true })
    paymentId: number; // 결제 ID (PK)

    @Column({ name: 'customer_id' })
    customerId: number;

    @Column({ name: 'staff_id' })
    staffId: number;

    @Column({ name: 'rental_id' })
    rentalId: number;

    @Column({ type: 'decimal', precision: 5, scale: 2 })
    amount: number; // 결제 금액

    @Column({ name: 'payment_date', type: 'datetime' })
    paymentDate: Date; // 결제 일시

    @UpdateDateColumn({ name: 'last_update', type: 'timestamp' })
    lastUpdate: Date; // 마지막 갱신 일시


    @ManyToOne(() => Staff, (staff) => staff.payments)
    @JoinColumn({ name: 'staff_id' })
    staff: Staff; // 직원 (FK)

    @ManyToOne(() => Rental, (rental) => rental.payments, { nullable: true })
    @JoinColumn({ name: 'rental_id' })
    rental?: Rental; // 대여 (nullable, FK)

    @ManyToOne(() => Customer, (customer) => customer.payments)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer; // 고객 (FK)
}
