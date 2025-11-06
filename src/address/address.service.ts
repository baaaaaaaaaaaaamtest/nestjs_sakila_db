import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Address } from './address.entity';
import { AddressDto } from './dto/address.dto';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import { AddressSearchDto } from './dto/addressSearch.dto';


@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async searchAddresses(filter: AddressSearchDto): Promise<object> {
    const whereCondition = this.getCondition(filter)

    if (Object.keys(whereCondition).length === 0) {
      throw new NotFoundException('At least one search criteria must be provided.');
    }

    const results = await this.addressRepository.findAndCount({
      where: whereCondition
    });
    const response = plainToInstance(AddressDto, results[0],{excludeExtraneousValues:true});
    const totalItems = results[1]
    const currentPage = filter.currentPage && filter.currentPage > 0 ? filter.currentPage : 1;
    const paging = getPaging(currentPage,totalItems)
    const sliceEntities = response.slice(paging.startIndex,paging.endIndex );
    if (totalItems===0) {
      throw new NotFoundException('No addresses found matching the criteria. ');
    }
    return {
      entities : sliceEntities,
      paging:paging
    };
  }

  getCondition(filter: AddressSearchDto):object{
    const whereCondition = {};
    if (filter.addressId) {
      whereCondition['addressId'] = filter.addressId;
    }
    if (filter.address) {
      whereCondition['address'] = ILike(`%${filter.address}%`);
    }
    if (filter.address2) {
      whereCondition['address2'] = ILike(`%${filter.address2}%`);
    }
    if (filter.district) {
      whereCondition['district'] = ILike(`%${filter.district}%`);
    }
    if (filter.postalCode) {
      whereCondition['postalCode'] = ILike(`%${filter.postalCode}%`);
    }
    if (filter.phone) {
      whereCondition['phone'] = ILike(`%${filter.phone}%`);
    }
    // if (filter.location) {
    //   whereCondition['location'] = ILike(`%${filter.location}%`);
    // }
    return whereCondition
  }
}