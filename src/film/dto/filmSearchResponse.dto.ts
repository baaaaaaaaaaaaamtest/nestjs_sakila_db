import { ApiProperty } from '@nestjs/swagger';
import { FilmDto } from './film.dto';


export class FilmSearchResponseDto {
  @ApiProperty({
    type: [FilmDto],
    description: '검색위한 카테고리',
    example: [
      {
        filmId: 1,
        title: '...',
        description:'...',
        releaseYear:1999,
        rentalDuration:10,
        rentalRate:1,
        length:100,
        replacementCost:10,
        rating:'PG-13',
        specialFeatures:'Trailers',
        actors:{}
      },
    ],
  })
  entities: FilmDto[];

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