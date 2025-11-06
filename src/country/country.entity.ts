import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn } from 'typeorm';
import { City } from '../city/city.entity';

@Entity({ name: 'country' })
export class Country {
    @PrimaryGeneratedColumn({ name: 'country_id' })
    countryId: number; // country_id: 국가 고유 ID (PK)

    @Column({ type: 'varchar', length: 50 })
    country: string; // country: 국가명

    @UpdateDateColumn({ name: 'last_update' })
    lastUpdate: Date; // last_update: 최종 수정 시각

    @OneToMany(() => City, (city) => city.country)
    cities: City[]; // 국가가 가진 여러 도시(1:N 관계)
}
