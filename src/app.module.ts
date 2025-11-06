import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ActorModule} from "./actor/actor.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Actor} from "./actor/actor.entity";
import {FilmModule} from "./film/film.module";
import {Film} from "./film/film.entity";
import { Language } from './language/language.entity';
import { Category } from './category/category.entity';
import { AddressModule } from './address/address.module';
import { CategoryModule } from './category/category.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { CustomerModule } from './customer/customer.module';
import { InventoryModule } from './inventory/inventory.module';
import { LanguageModule } from './language/language.module';
import { PaymentModule } from './payment/payment.module';
import { RentalModule } from './rental/rental.module';
import { StaffModule } from './staff/staff.module';
import { StoreModule } from './store/store.module';
import { Address } from './address/address.entity';
import { City } from './city/city.entity';
import { Country } from './country/country.entity';
import { Customer } from './customer/customer.entity';
import { Inventory } from './inventory/inventory.entity';
import { Payment } from './payment/payment.entity';
import { Rental } from './rental/rental.entity';
import { Staff } from './staff/staff.entity';
import { Store } from './store/store.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql', // 또는 다른 DB 타입
            host: 'localhost',
            port: 3306,
            username: 'sakila',
            password: '12345678',
            database: 'sakila',
            entities: [Actor,Address,Category,City,Country,Customer,Film,Inventory,Language,Payment,Rental,Staff,Store], // or 'dist/**/*.entity.js'
            legacySpatialSupport: false,

          // autoLoadEntities: true,
            // synchronize: true,
        }),
        ActorModule,AddressModule,CategoryModule,CityModule,CountryModule,CustomerModule,FilmModule,InventoryModule,LanguageModule,PaymentModule,
      RentalModule,StaffModule,StoreModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
