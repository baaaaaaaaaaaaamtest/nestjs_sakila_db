import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Category } from './category.entity';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { CategorySearchDto } from './dto/categorySearch.dto';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService{
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}


  async searchCategory(filter: CategorySearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:['films']      // films item 이 너무많아 추후 따로 조회 필요
    });
    const response = plainToInstance(CategoryDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: CategorySearchDto):object{
    const whereCondition = {};
    if (filter.categoryId) {
      whereCondition['categoryId'] = filter.categoryId;
    }
    if (filter.name) {
      whereCondition['name'] = ILike(`%${filter.name}%`);
    }
    return whereCondition
  }
}