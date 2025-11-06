import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Film } from '../film/film.entity';

@Entity('actor')
export class Actor {
  @PrimaryGeneratedColumn({ name: 'actor_id' })
  actorId: number;

  @Column({ name: 'first_name', length: 45 })
  firstName: string;

  @Column({ name: 'last_name', length: 45 })
  lastName: string;

  @Column({ name: 'last_update', type: 'timestamp' })
  lastUpdate: Date;

  @ManyToMany(() => Film, (film) => film.actors)
  @JoinTable({
    name: 'film_actor',
    joinColumn: { name: 'actor_id', referencedColumnName: 'actorId' },
    inverseJoinColumn: { name: 'film_id', referencedColumnName: 'filmId' },
  })
  films: Film[];
}
