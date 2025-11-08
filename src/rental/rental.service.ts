import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { Rental } from './rental.entity';
import { RentalSearchDto } from './dto/rentalSearch.dto';
import { RentalDto } from './dto/rental.dto';



@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private readonly repository: Repository<Rental>,
  ) {}

  async searchCategory(filter: RentalSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.repository.findAndCount({
      where: whereCondition,
      relations:['customer','inventory','payments']
    });
    const response = plainToInstance(RentalDto, results[0], { excludeExtraneousValues: true });
    const paging = getPaging(results[1],filter)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: RentalSearchDto):object{
    const whereCondition = {};
    if (filter.rentalId) {
      whereCondition['rentalId'] = filter.rentalId;
    }
    if (filter.returnDate) {
      whereCondition['returnDate'] =filter.returnDate;
    }
    if (filter.rentalDate) {
      whereCondition['rentalDate'] = filter.rentalDate;
    }
    return whereCondition
  }

}