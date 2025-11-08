import { Expose, Type } from 'class-transformer';
import { CityDto } from '../../city/dto/city.dto';


export class CountryDto {
  @Expose({ name: 'countryId' })
  countryId: number;

  @Expose({ name: 'country' })
  country: string;

  @Expose({ name: 'cities' })
  @Type(() => CityDto)
  cities: CityDto[]
}