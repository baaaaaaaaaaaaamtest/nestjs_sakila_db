import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Film } from '../film/film.entity';

@Entity({ name: 'language' })
export class Language {
    @PrimaryGeneratedColumn({ name: 'language_id', type: 'tinyint', unsigned: true })
    languageId: number; // 언어 ID (PK)

    @Column({ type: 'char', length: 20 })
    name: string; // 언어 이름 (영문)

    @UpdateDateColumn({ name: 'last_update', type: 'timestamp' })
    lastUpdate: Date; // 마지막 갱신 일시

    @OneToMany(() => Film, (film) => film.language)
    films: Film[];
}
