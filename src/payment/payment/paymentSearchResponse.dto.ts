import { ApiProperty } from '@nestjs/swagger';
import { PaymentDto } from './payment.dto';


export class PaymentSearchResponseDto {
  @ApiProperty({
    type: [PaymentDto],
    description: '검색위한 카테고리',
    example: [
      {
        paymentId: 1,
        amount: 1000,
        paymentDate:'2005-05-25T02:30:37.000Z',
        staff:{},
        rental:{},
        customer:{}
      },
    ],
  })
  entities: PaymentDto[];

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