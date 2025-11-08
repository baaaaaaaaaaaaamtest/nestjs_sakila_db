import { Expose, Type } from 'class-transformer';
import { FilmDto } from '../../film/dto/film.dto';


export class InventoryDto {
  @Expose({ name: 'inventoryId' })
  inventoryId: number;

  @Expose({ name: 'film' })
  @Type(() => FilmDto)
  film: FilmDto;

}