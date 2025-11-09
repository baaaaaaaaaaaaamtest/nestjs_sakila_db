// film.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  UpdateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { Actor } from '../actor/actor.entity';
import { Category } from '../category/category.entity';
import { Language } from '../language/language.entity';
import {Inventory} from "../inventory/inventory.entity";

@Entity('film')
export class Film {
  @PrimaryGeneratedColumn({ name: 'film_id' })
  filmId: number; // surrogate primary key

  @Column({ type: 'varchar', length: 255 })
  title: string; // 영화 제목

  @Column({ type: 'text', nullable: true })
  description?: string; // 영화 설명 (nullable)

  @Column({ name: 'release_year', type: 'year', nullable: true })
  releaseYear?: number; // 발매 연도 (nullable)

  @Column({ name: 'language_id' })
  languageId: number; // language 테이블 FK

  @Column({ name: 'original_language_id', nullable: true })
  originalLanguageId?: number; // 원본 언어 FK (nullable)

  @Column({ name: 'rental_duration', type: 'tinyint' })
  rentalDuration: number; // 대여 기간(일)

  @Column({ name: 'rental_rate', type: 'decimal', precision: 4, scale: 2 })
  rentalRate: number; // 대여 비용

  @Column({ type: 'smallint', nullable: true })
  length?: number; // 상영 시간(분), nullable

  @Column({ name: 'replacement_cost', type: 'decimal', precision: 5, scale: 2 })
  replacementCost: number; // 대체 비용

  @Column({ type: 'enum', enum: ['G', 'PG', 'PG-13', 'R', 'NC-17'], default: 'G' })
  rating: string; // 등급

  @Column({ name: 'special_features', type: 'set', enum: ['Trailers', 'Commentaries', 'Deleted Scenes', 'Behind the Scenes'], nullable: true })
  specialFeatures?: string[]; // 특수 기능, nullable

  @UpdateDateColumn({ name: 'last_update', type: 'timestamp' })
  lastUpdate: Date; // 최종 수정 시각

    @OneToMany(() => Inventory, (inventory) => inventory.film)
    inventories: Inventory[]; //주소 가진 여러 도시(1:N 관계)

    @ManyToMany(() => Actor, (actor) => actor.films)
    actors: Actor[];

    @ManyToMany(() => Category, (categories) => categories.films)
    categories: Category[];

    @ManyToOne(() => Language, (Language) => Language.films)
    @JoinColumn({ name: 'language_id' })
    language: Language;
}
