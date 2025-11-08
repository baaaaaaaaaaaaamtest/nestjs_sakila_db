import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { Language } from './language.entity';
import { LanguageSearchDto } from './dto/languageSearch.dto';
import { LanguageDto } from './dto/language.dto';



@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private readonly repository: Repository<Language>,
  ) {}

  async searchCategory(filter: LanguageSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:['films']  // films 숫자가 너무많은 경우 별도의 api를 호출하여 페이징 처리
    });
    const response = plainToInstance(LanguageDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: LanguageSearchDto):object{
    const whereCondition = {};
    if (filter.languageId) {
      whereCondition['languageId'] = filter.languageId;
    }
    if (filter.name) {
      whereCondition['name'] = ILike(`%${filter.name}%`);
    }
    return whereCondition
  }

}