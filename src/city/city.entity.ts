import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import {Country} from "../country/country.entity";
import {Address} from "../address/address.entity";

@Entity({ name: 'city' })
export class City {
    @PrimaryGeneratedColumn({ name: 'city_id' })
    cityId: number; // city_id: 도시 ID (PK)

    @Column({ type: 'varchar', length: 50 })
    city: string; // city: 도시명

    @Column({ name: 'country_id' })
    countryId: number; // country_id: 국가 ID (FK)

    @UpdateDateColumn({ name: 'last_update' })
    lastUpdate: Date; // last_update: 최종 수정 시각

    @ManyToOne(() => Country, (country) => country.cities)
    @JoinColumn({ name: 'country_id' })
    country: Country; // Country 엔티티와 다대일 관계 설정


    @OneToMany(() => Address, (address) => address.city)
    address: Address[]; //주소 가진 여러 도시(1:N 관계)

}
