import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';

import { Inventory } from './inventory.entity';
import { InventorySearchDto } from './dto/inventorySearch.dto';
import { InventoryDto } from './dto/inventory.dto';


@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly repository: Repository<Inventory>,
  ) {}

  async searchCategory(filter: InventorySearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:['film']
    });
    const response = plainToInstance(InventoryDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: InventorySearchDto):object{
    const whereCondition = {};
    if (filter.inventoryId) {
      whereCondition['inventoryId'] = filter.inventoryId;
    }

    return whereCondition
  }

}