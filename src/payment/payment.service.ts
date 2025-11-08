import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { getPaging } from '../utils/paging.util';
import {Payment} from "./payment.entity";
import {PaymentSearchDto} from "./payment/paymentSearch.dto";
import {PaymentDto} from "./payment/payment.dto";



@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private readonly repository: Repository<Payment>,
    ) {}

    async searchCategory(filter: PaymentSearchDto): Promise<object> {
        const whereCondition = this.getCondition(filter)

        if (Object.keys(whereCondition).length === 0) {
            throw new NotFoundException('At least one search criteria must be provided.');
        }

        const results = await this.repository.findAndCount({
            where: whereCondition,
            relations:['staff','rental','customer']  // films 숫자가 너무많은 경우 별도의 api를 호출하여 페이징 처리
        });
        const response = plainToInstance(PaymentDto, results[0], { excludeExtraneousValues: true });
        const paging = getPaging(results[1],filter)
        const sliceEntities = response.slice(paging.startIndex,paging.endIndex );

        return {
            entities : sliceEntities,
            paging:paging
        };
    }

    getCondition(filter: PaymentSearchDto):object{
        const whereCondition = {};
        if (filter.paymentId) {
            whereCondition['paymentId'] = filter.paymentId;
        }
        if (filter.amount) {
            whereCondition['amount'] =filter.amount;
        }
        if (filter.paymentDate) {
            whereCondition['paymentDate'] = filter.paymentDate;
        }
        return whereCondition
    }

}