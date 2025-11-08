import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Country } from './country.entity';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { CountrySearchDto } from './dto/countrySearch.dto';
import { CountryDto } from './dto/country.dto';


@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly repository: Repository<Country>,
  ) {}

  async searchCategory(filter: CountrySearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:['cities']
    });
    const response = plainToInstance(CountryDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: CountrySearchDto):object{
    const whereCondition = {};
    if (filter.countryId) {
      whereCondition['countryId'] = filter.countryId;
    }
    if (filter.country) {
      whereCondition['country'] = ILike(`%${filter.country}%`);
    }
    return whereCondition
  }

}