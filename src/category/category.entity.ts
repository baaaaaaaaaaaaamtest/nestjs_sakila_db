import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Film } from '../film/film.entity';

@Entity({ name: 'category' })
export class Category {
    @PrimaryGeneratedColumn({ name: 'category_id' })
    categoryId: number;  // 카테고리 ID (PK)

    @Column({ type: 'varchar', length: 25 })
    name: string;       // 카테고리 이름

    @UpdateDateColumn({ name: 'last_update', type: 'timestamp' })
    lastUpdate: Date;   // 마지막 업데이트 시각

  @ManyToMany(() => Film, (film) => film.categories)
  @JoinTable({
    name: 'film_category',
    joinColumn: { name: 'category_id', referencedColumnName: 'categoryId' },
    inverseJoinColumn: { name: 'film_id', referencedColumnName: 'filmId' },
  })
  films: Film[];
}
