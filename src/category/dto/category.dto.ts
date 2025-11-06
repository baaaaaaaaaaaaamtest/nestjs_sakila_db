import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';


export class CategoryDto{

  @Expose({ name: 'categoryId' })
  categoryId: number;

  @Expose({ name: 'name' })
  name: string;

}