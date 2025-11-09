import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { FilmDto } from '../../film/dto/film.dto';


export class CategoryDto{

  @Expose({ name: 'categoryId' })
  categoryId: number;

  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'films' })
  @Type(() => FilmDto)
  films: FilmDto[];
}