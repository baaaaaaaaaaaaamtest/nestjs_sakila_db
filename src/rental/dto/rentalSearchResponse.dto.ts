import { ApiProperty } from '@nestjs/swagger';
import { RentalDto } from './rental.dto';


export class RentalSearchResponseDto {
  @ApiProperty({
    type: [RentalDto],
    description: '검색위한 카테고리',
    example: [
      {
        paymentId: 1,
        rentalDate:'2005-05-25T02:30:37.000Z',
        returnDate:'2005-05-25T02:30:37.000Z',
        customer:{},
        inventory:{},
        payments:[],
      },
    ],
  })
  entities: RentalDto[];

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