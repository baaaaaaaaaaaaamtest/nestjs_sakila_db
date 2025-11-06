import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
  ) {}

  async findAll(): Promise<Film[]> {
    return this.filmRepository.find();
  }

  async findOne(id: number): Promise<Film> {
    // @ts-ignore
    return this.filmRepository.findOne({
      where : { filmId: id },
      relations: ['categories','language'],

    });
  }

}
