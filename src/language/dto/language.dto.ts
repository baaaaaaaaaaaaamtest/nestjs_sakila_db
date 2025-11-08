import { Expose, Type } from 'class-transformer';
import { FilmDto } from '../../film/dto/film.dto';


export class LanguageDto {
  @Expose({ name: 'languageId' })
  languageId: number;

  @Expose({ name: 'name' })
  name?: string;

  @Expose({ name: 'films' })
  @Type(() => FilmDto)
  films: FilmDto[];

}