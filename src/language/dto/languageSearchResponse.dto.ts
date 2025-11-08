import { ApiProperty } from '@nestjs/swagger';
import { LanguageDto } from './language.dto';


export class LanguageSearchResponseDto {
  @ApiProperty({
    type: [LanguageDto],
    description: '검색위한 카테고리',
    example: [
      {
        languageId: 1,
        name: '...',
        films:[]
      },
    ],
  })
  entities: LanguageDto[];

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