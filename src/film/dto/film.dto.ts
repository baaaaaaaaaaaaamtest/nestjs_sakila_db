import { Expose, Type } from 'class-transformer';
import { ActorDto } from '../../actor/dto/actor.dto';
import { CategoryDto } from '../../category/dto/category.dto';
import { InventoryDto } from '../../inventory/dto/inventory.dto';
import { LanguageDto } from '../../language/dto/language.dto';

export class FilmDto {
  @Expose({ name: 'filmId' })
  filmId: number;

  @Expose({ name: 'title' })
  title: string;

  @Expose({ name: 'description' })
  description?: string;

  @Expose({ name: 'releaseYear' })
  releaseYear?: number;

  @Expose({ name: 'rentalDuration' })
  rentalDuration: number;

  @Expose({ name: 'rentalRate' })
  rentalRate: number;

  @Expose({ name: 'length' })
  length: number;

  @Expose({ name: 'replacementCost' })
  replacementCost: number;

  @Expose({ name: 'rating' })
  rating: string;

  @Expose({ name: 'specialFeatures' })
  specialFeatures: string[];

  @Expose({ name: 'actors' })
  @Type(() => ActorDto)
  actors: ActorDto[];

  @Expose({ name: 'categories' })
  @Type(() => CategoryDto)
  categories: CategoryDto[];

  @Expose({ name: 'inventories' })
  @Type(() => InventoryDto)
  inventories: InventoryDto[];

  @Expose({ name: 'language' })
  @Type(() => LanguageDto)
  language: LanguageDto;

}