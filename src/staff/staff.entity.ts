import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
    UpdateDateColumn,
} from 'typeorm';
import { Address } from '../address/address.entity';
import { Store } from '../store/store.entity';
import { Payment } from '../payment/payment.entity';
import { Rental } from '../rental/rental.entity';


@Entity({ name: 'staff' })
export class Staff {
    @PrimaryGeneratedColumn({ name: 'staff_id', type: 'tinyint', unsigned: true })
    staffId: number; // 직원 ID (PK)

    @Column({ name: 'first_name', type: 'varchar', length: 45 })
    firstName: string; // 이름

    @Column({ name: 'last_name', type: 'varchar', length: 45 })
    lastName: string; // 성

    @Column({ name: 'address_id' })
    addressId: number;

    @Column({ type: 'blob', nullable: true })
    picture?: Buffer; // 직원 사진

    @Column({ type: 'varchar', length: 50, nullable: true })
    email?: string; // 이메일

    @Column({ name: 'store_id' })
    storeId: number;

    @Column({ type: 'boolean', default: true })
    active: boolean; // 근무 상태 (활성 여부)

    @Column({ type: 'varchar', length: 16 })
    username: string; // 사용자명

    @Column({ type: 'varchar', length: 40, nullable: true })
    password?: string; // 비밀번호 (SHA2 해시 저장)

    @UpdateDateColumn({ name: 'last_update', type: 'timestamp' })
    lastUpdate: Date; // 마지막 갱신 일시

    @OneToMany(() => Store, (store) => store.manager)
    stores: Store[]; // 결제 내역

    @OneToMany(() => Payment, (payment) => payment.staff)
    payments: Payment[]; // 결제 내역

    @OneToMany(() => Rental, (rental) => rental.staff)
    rentals: Rental[]; // 대여 내역


    @ManyToOne(() => Store, (store) => store.manager)
    @JoinColumn({ name: 'store_id' })
    store: Store; // 주소 (FK)

    @ManyToOne(() => Address, (address) => address.staff)
    @JoinColumn({ name: 'address_id' })
    address: Address; // 주소 (FK)
}
