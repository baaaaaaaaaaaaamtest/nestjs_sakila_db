import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Inventory } from '../inventory/inventory.entity';
import { Customer } from '../customer/customer.entity';
import { Staff } from '../staff/staff.entity';
import { Payment } from '../payment/payment.entity';


@Entity({ name: 'rental' })
export class Rental {
    @PrimaryGeneratedColumn({ name: 'rental_id', type: 'int', unsigned: true })
    rentalId: number; // 대여 ID (PK)

    @Column({ name: 'rental_date', type: 'datetime' })
    rentalDate: Date; // 대여 일시

    @Column({ name: 'inventory_id', type: 'smallint', unsigned: true })
    inventoryId: number; // inventory ID (FK)

    @Column({ name: 'customer_id' })
    customerId: number;

    @Column({ name: 'staff_id' })
    staffId: number;

    @Column({ name: 'return_date', type: 'datetime', nullable: true })
    returnDate?: Date; // 반납 일시 (nullable)

    @UpdateDateColumn({ name: 'last_update', type: 'timestamp' })
    lastUpdate: Date; // 마지막 갱신 일시



    @OneToMany(() => Payment, (payment) => payment.rental)
    payments: Payment[]; // 관련 결제 내역

    @ManyToOne(() => Staff, (staff) => staff.rentals)
    @JoinColumn({ name: 'staff_id' })
    staff: Staff; // 처리한 직원 (FK)

    @ManyToOne(() => Inventory, (inventory) => inventory.rentals)
    @JoinColumn({ name: 'inventory_id' })
    inventory: Inventory; // 대여된 아이템 (FK)

    @ManyToOne(() => Customer, (customer) => customer.rentals)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer; // 대여한 고객 (FK)

}
