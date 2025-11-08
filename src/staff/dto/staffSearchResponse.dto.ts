import { ApiProperty } from '@nestjs/swagger';
import { StaffDto } from './staff.dto';


export class StaffSearchResponseDto {
  @ApiProperty({
    type: [StaffDto],
    description: '검색위한 카테고리',
    example: [
      {
        staffId: 1,
        firstName: '...',
        lastName: '...',
        picture: '',
        email: '...',
        active: 1,
        username: '...',
        payments: [],
        rentals:[],
        address:{},
      },
    ],
  })
  entities: StaffDto[];

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