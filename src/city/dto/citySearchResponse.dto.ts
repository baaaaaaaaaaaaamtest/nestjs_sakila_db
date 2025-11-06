import { ApiProperty } from '@nestjs/swagger';
import { CityDto } from './city.dto';


export class CitySearchResponseDto {
  @ApiProperty({
    type: [CityDto],
    description: '검색위한 카테고리',
    example: [
      {
        cityId: 1,
        city: '....',
        country:{},
        address:[]
      },
    ],
  })
  entities: CityDto[];

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