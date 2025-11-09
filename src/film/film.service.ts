import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';

import { Film } from './film.entity';
import { FilmSearchDto } from './dto/filmSearch.dto';
import { FilmDto } from './dto/film.dto';


@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private readonly repository: Repository<Film>,
  ) {}

  async searchCategory(filter: FilmSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:[
        'actors',
        'categories',
        'inventories',
        'language'
      ]
    });
    const response = plainToInstance(FilmDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: FilmSearchDto):object{
    const whereCondition = {};
    if (filter.filmId) {
      whereCondition['filmId'] = filter.filmId;
    }
    if (filter.title) {
      whereCondition['title'] = ILike(`%${filter.title}%`);
    }
    if (filter.description) {
      whereCondition['description'] = ILike(`%${filter.description}%`);
    }
    if (filter.releaseYear) {
      whereCondition['releaseYear'] = filter.releaseYear;
    }
    if (filter.rentalDuration) {
      whereCondition['rentalDuration'] = filter.rentalDuration;
    }
    if (filter.rentalRate) {
      whereCondition['rentalRate'] = filter.rentalRate;
    }
    if (filter.length) {
      whereCondition['length'] = filter.length;
    }
    if (filter.replacementCost) {
      whereCondition['replacementCost'] = filter.replacementCost;
    }
    if (filter.rating) {
      whereCondition['rating'] = filter.rating;
    }
    return whereCondition
  }

}