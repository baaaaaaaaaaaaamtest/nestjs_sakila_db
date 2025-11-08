import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { Staff } from './staff.entity';
import { StaffSearchDto } from './dto/staffSearch.dto';
import { StaffDto } from './dto/staff.dto';



@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly repository: Repository<Staff>,
  ) {}

  async searchCategory(filter: StaffSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:[
        // 'payments' // payments 건수 너무 많아 딜레이 유발, 필요시 따로 처리
        // 'rentals', //  rentals 건수 너무 많이 딜레이 유발, 필요시 따로 처리
        'address'
      ]
    });
    const response = plainToInstance(StaffDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: StaffSearchDto):object{
    const whereCondition = {};
    if (filter.staffId) {
      whereCondition['staffId'] = filter.staffId;
    }
    if (filter.firstName) {
      whereCondition['firstName'] = ILike(`%${filter.firstName}%`);
    }
    if (filter.lastName) {
      whereCondition['lastName'] = ILike(`%${filter.lastName}%`);
    }
    if (filter.username) {
      whereCondition['username'] = ILike(`%${filter.username}%`);
    }
    if (filter.active) {
      whereCondition['active'] = filter.active
    }
    if (filter.email) {
      whereCondition['email'] = ILike(`%${filter.email}%`);
    }
    return whereCondition
  }

}