import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Film } from '../film/film.entity';
import { Store } from '../store/store.entity';
import { Rental } from '../rental/rental.entity';


@Entity({ name: 'inventory' })
export class Inventory {
    @PrimaryGeneratedColumn({ name: 'inventory_id', type: 'mediumint', unsigned: true })
    inventoryId: number; // 재고 아이템 고유 ID (PK)

    @Column({ name: 'film_id', type: 'smallint', unsigned: true })
    filmId: number; // 영화 ID (FK)

    @Column({ name: 'store_id', type: 'tinyint', unsigned: true })
    storeId: number; // 매장 ID (FK)

    @UpdateDateColumn({ name: 'last_update' })
    lastUpdate: Date; // 마지막 업데이트 시각



    @ManyToOne(() => Film, (film) => film.inventories)
    @JoinColumn({ name: 'film_id' })
    film: Film; // 영화 엔티티와 다대일 관계

    @ManyToOne(() => Store, (store) => store.inventories)
    @JoinColumn({ name: 'store_id' })
    store: Store; // 매장 엔티티와 다대일 관계

    @OneToMany(()=>Rental,(rental)=>rental.inventoryId)
    rentals:Rental[];

}
