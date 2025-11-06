// actor.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Language} from "./language.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Language])],
    providers: [],
    controllers: [],
})
export class LanguageModule {}
