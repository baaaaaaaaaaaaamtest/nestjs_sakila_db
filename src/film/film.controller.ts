import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FilmService } from './film.service';
import { Film } from './film.entity';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  getAll(): Promise<Film[]> {
    return this.filmService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Film> {
    return this.filmService.findOne(id);
  }

}
