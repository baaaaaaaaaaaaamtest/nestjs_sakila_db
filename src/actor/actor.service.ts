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
    private readonly repository: Repository<Actor>,
  ) {}
  async searchActors(filter: ActorSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:['films']
    });
    const response = plainToInstance(ActorDto, results,{excludeExtraneousValues:true});
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

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
