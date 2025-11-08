import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { City } from './city.entity';
import { CategorySearchDto } from '../category/dto/categorySearch.dto';
import { plainToInstance } from 'class-transformer';
import { CategoryDto } from '../category/dto/category.dto';
import { getPaging } from '../utils/paging.util';
import { CitySearchDto } from './dto/citySearch.dto';
import { CityDto } from './dto/city.dto';


@Injectable()
export class CityService{
  constructor(
    @InjectRepository(City)
    private readonly repository: Repository<City>,
  ) {}

  async searchCategory(filter: CitySearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:['country','address']
    });
    const response = plainToInstance(CityDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: CitySearchDto):object{
    const whereCondition = {};
    if (filter.cityId) {
      whereCondition['cityId'] = filter.cityId;
    }
    if (filter.city) {
      whereCondition['city'] = ILike(`%${filter.city}%`);
    }
    return whereCondition
  }
}