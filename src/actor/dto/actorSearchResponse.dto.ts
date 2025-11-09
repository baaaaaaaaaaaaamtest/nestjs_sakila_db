import { ActorDto } from './actor.dto';
import { ApiProperty } from '@nestjs/swagger';


export class ActorSearchResponseDto {
  @ApiProperty({
    type: [ActorDto],
    description: '검색된 배우 목록',
    example: [
      {
        actorId: 1,
        firstName: 'nick.',
        lastName: 'john',
        films:{}
      },
    ],
  })
  entities: ActorDto[];

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