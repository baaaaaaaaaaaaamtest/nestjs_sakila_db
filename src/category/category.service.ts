import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Category } from './category.entity';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { CategorySearchDto } from './dto/categorySearch.dto';
import { CategoryDto } from './dto/category.dto';
import { CityDto } from '../city/dto/city.dto';

@Injectable()
export class CategoryService{
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}


  async searchCategory(filter: CategorySearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.categoryRepository.findAndCount({
      where: whereCondition
    });
    const response = plainToInstance(CategoryDto, results[0], { excludeExtraneousValues: true });
    const totalItems = results[1]
    const currentPage = filter.currentPage && filter.currentPage > 0 ? filter.currentPage : 1;
    const paging = getPaging(currentPage,totalItems)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    if (results[1]==0) {
      throw new NotFoundException('No category found matching the criteria. ');
    }
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