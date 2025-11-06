import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  ILike, Repository } from 'typeorm';
import { ActorDto } from './dto/actor.dto';
import { Actor } from './actor.entity';
import { ActorSearchDto } from './dto/actorSearch.dto';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(Actor)
    private readonly actorRepository: Repository<Actor>,
  ) {}
  async searchActors(filter: ActorSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.actorRepository.findAndCount({
      where: whereCondition
    });
    const response = plainToInstance(ActorDto, results,{excludeExtraneousValues:true});
    const totalItems = results[1]
    const currentPage = filter.currentPage && filter.currentPage > 0 ? filter.currentPage : 1;
    const paging = getPaging(currentPage,totalItems)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );
    if (totalItems===0) {
      throw new NotFoundException('No actors found matching the criteria. ');
    }
    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: ActorSearchDto):object{
    const whereCondition = {};
    if (filter.actorId) {
      whereCondition['actorId'] = filter.actorId;
    }
    if (filter.firstName) {
      whereCondition['firstName'] = ILike(`%${filter.firstName}%`);
    }
    if (filter.lastName) {
      whereCondition['lastName'] = ILike(`%${filter.lastName}%`);
    }
    return whereCondition
  }

}
