import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { Store } from './store.entity';
import { StoreSearchDto } from './dto/storeSearch.dto';
import { StoreDto } from './dto/store.dto';



@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly repository: Repository<Store>,
  ) {}

  async searchCategory(filter: StoreSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:[
        // 'inventories',    // inventories item 너무 많음
        // 'customers',      //  customers item 너무 많음
        'managers',
        'address',
      ]
    });
    const response = plainToInstance(StoreDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: StoreSearchDto):object{
    const whereCondition = {};
    if (filter.storeId) {
      whereCondition['storeId'] = filter.storeId;
    }
    return whereCondition
  }

}