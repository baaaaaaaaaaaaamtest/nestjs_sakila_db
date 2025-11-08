import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
} from 'typeorm';
import { Staff } from '../staff/staff.entity';
import { Address } from '../address/address.entity';
import { Inventory } from '../inventory/inventory.entity';
import { Customer } from '../customer/customer.entity';


@Entity({ name: 'store' })
export class Store {
    @PrimaryGeneratedColumn({ name: 'store_id', type: 'tinyint', unsigned: true })
    storeId: number; // 매장 ID (PK)

    @Column({ name: 'manager_staff_id' })
    managerStaffId: number; //

    @Column({ name: 'address_id' })
    addressId: number; //

    @UpdateDateColumn({ name: 'last_update', type: 'timestamp' })
    lastUpdate: Date; // 마지막 갱신 일시


    @OneToMany(() => Inventory, (inventory) => inventory.store)
    inventories: Inventory[]; // 보유 재고

    @OneToMany(() => Customer, (customer) => customer.store)
    customers: Customer[]; // 매장 고객

    @OneToMany(() => Staff, (staff) => staff.store)
    managers: Staff[]; // 매장 고객

    @ManyToOne(() => Address, (address) => address.stores)
    @JoinColumn({ name: 'address_id' })
    address: Address; // 매장 주소 (FK)

    @ManyToOne(() => Staff, (staff) => staff.stores)
    @JoinColumn({ name: 'manager_staff_id' })
    manager: Staff; // 매장 주소 (FK)
}
