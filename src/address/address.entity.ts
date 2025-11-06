import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import {Staff} from "../staff/staff.entity";
import { Customer } from '../customer/customer.entity';
import { Store } from '../store/store.entity';
import { City } from '../city/city.entity';

@Entity({ name: 'address' })
export class Address {
    @PrimaryGeneratedColumn({ name: 'address_id' })
    addressId: number; // 주소 ID

    @Column({ type: 'varchar', length: 50 })
    address: string; // 주소 1

    @Column({ type: 'varchar', length: 50, nullable: true })
    address2?: string; // 주소 2 (옵션)

    @Column({ type: 'varchar', length: 20 })
    district: string; // 구/지역

    @Column({ name: 'city_id' })
    cityId: number; // 도시 ID (외래키)

    @Column({ name: 'postal_code',type: 'varchar', length: 10, nullable: true })
    postalCode?: string; // 우편번호

    @Column({ type: 'varchar', length: 20 })
    phone: string; // 전화번호

    @Column({ name:'location',type: 'geometry', nullable: true })
    location?: string; // 공간 정보 (지리적 위치, 예: WKT 문자열)

    @Column({ name: 'last_update', type: 'timestamp' })
    lastUpdate: Date; // 마지막 업데이트 시각



    @ManyToOne(() => City, (city) => city.address)
    @JoinColumn({ name: 'city_id' })
    city: City;

    @OneToMany(() => Customer, (customer) => customer.addressId)
    customers: Customer[]; // 대여 내역

    @OneToMany(() => Store, (store) => store.addressId)
    stores: Store[]; // 대여 내역

    @OneToMany(() => Staff, (staff) => staff.addressId)
    staff: Staff[]; // Country 엔티티와 다대일 관계 설정


}
