import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rental } from './rental.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rental])],
  providers: [],
  controllers: [],
})
export class RentalModule {}
