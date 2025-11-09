import { Expose, Type } from 'class-transformer';
import {FilmDto} from "../../film/dto/film.dto";
import {AddressDto} from "../../address/dto/address.dto";

export class ActorDto {
  @Expose({ name: 'actorId' })
  actorId: number;

  @Expose({ name: 'firstName' })
  firstName: string;

  @Expose({ name: 'lastName' })
  lastName: string;

  lastUpdate: Date;

  @Expose({ name: 'films' })
  @Type(() => FilmDto)
  films: FilmDto[];
}
