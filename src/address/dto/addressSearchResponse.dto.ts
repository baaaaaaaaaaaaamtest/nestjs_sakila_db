import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './address.dto';

export class AddressSearchResponseDto {
  @ApiProperty({
    type: [AddressDto],
    description: '검색된 배우 목록',
    example: [
      {
        addressId: 1,
        address: '...',
        address2: '...',
        district: '...',
        phone: '...',
        postalCode: '...',
        location: '...',
      },
    ],
  })
  entities: AddressDto[];

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