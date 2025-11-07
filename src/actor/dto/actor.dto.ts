import { Expose } from 'class-transformer';
// import { FilmDto } from '../film/film.dto';  // Film DTO를 별도로 만들어야 함

export class ActorDto {
  @Expose({ name: 'actorId' })
  actorId: number;

  @Expose({ name: 'firstName' })
  firstName: string;

  @Expose({ name: 'lastName' })
  lastName: string;

  lastUpdate: Date;

  // @ApiProperty({ type: [FilmDto] })
  // films: FilmDto[];
}
