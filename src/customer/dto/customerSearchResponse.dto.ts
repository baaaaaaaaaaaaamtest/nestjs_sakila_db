import { ApiProperty } from '@nestjs/swagger';
import { CustomerDto } from './customer.dto';


export class CustomerSearchResponseDto {
  @ApiProperty({
    type: [CustomerDto],
    description: '검색위한 카테고리',
    example: [
      {
        customerId: 1,
        firstName: '...',
        lastName:'...',
        email:'...',
        active:false,
        address:{}
      },
    ],
  })
  entities: CustomerDto[];

  @ApiProperty({
    description: '페이징 정보 객체',
    example: {
      currentPage: 1,
      pageSize: 5,
      totalItems: 100,
      totalPages: 20,
      startPage: 1,
      endPage: 5,
      pageList: [1, 2, 3, 4, 5],
      startIndex: 0,
      endIndex: 5,
    },
  })
  paging: object;
}