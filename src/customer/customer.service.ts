import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { Customer } from './customer.entity';
import { CustomerSearchDto } from './dto/customerSearch.dto';
import { CustomerDto } from './dto/customer.dto';


@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  async searchCategory(filter: CustomerSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:['address']
    });
    const response = plainToInstance(CustomerDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: CustomerSearchDto):object{
    const whereCondition = {};
    if (filter.customerId) {
      whereCondition['customerId'] = filter.customerId;
    }
    if (filter.firstName) {
      whereCondition['firstName'] = ILike(`%${filter.firstName}%`);
    }
    if (filter.lastName) {
      whereCondition['lastName'] = ILike(`%${filter.lastName}%`);
    }
    if (filter.email) {
      whereCondition['email'] = ILike(`%${filter.email}%`);
    }
    if (filter.active) {
      whereCondition['active'] = filter.active
    }
    return whereCondition
  }

}