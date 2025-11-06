import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Store } from '../store/store.entity';
import { Address } from '../address/address.entity';
import { Payment } from '../payment/payment.entity';
import { Rental } from '../rental/rental.entity';


@Entity({ name: 'customer' })
export class Customer {
    @PrimaryGeneratedColumn({ name: 'customer_id' })
    customerId: number; // 고객 ID (PK)

    @Column({ name: 'store_id' })
    storeId: number; // 고객이 주로 이용하는 매장 ID (FK)

    @Column({ name: 'first_name', type: 'varchar', length: 45 })
    firstName: string; // 고객 이름

    @Column({ name: 'last_name', type: 'varchar', length: 45 })
    lastName: string; // 고객 성

    @Column({ name: 'email', type: 'varchar', length: 50, nullable: true })
    email?: string; // 이메일 주소 (선택)

    @Column({ name: 'address_id' })
    addressId: number; // 주소 ID (FK)

    @Column({ type: 'tinyint', default: 1 })
    active: boolean; // 고객 활성 상태 (기본: true)

    @CreateDateColumn({ name: 'create_date' })
    createDate: Date; // 가입 일자 (자동 설정)

    @UpdateDateColumn({ name: 'last_update' })
    lastUpdate: Date; // 최근 수정일자




    @ManyToOne(() => Address, (address) => address.customers)
    @JoinColumn({ name: 'address_id' })
    address: Address; // 주소 엔티티와 다대일 관계

    @ManyToOne(() => Store, (store) => store.customers)
    @JoinColumn({ name: 'store_id' })
    store: Store; // 매장 엔티티와 다대일 관계

    @OneToMany(() => Payment, (payment) => payment.customer)
    payments: Payment[];

    @OneToMany(() => Rental, (rental) => rental.customer)
    rentals: Rental[];
}
