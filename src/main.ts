import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 없는 프로퍼티는 자동으로 제거
  //     forbidNonWhitelisted: true, // DTO에 없는 프로퍼티가 있으면 요청 거부 (옵션)
      transform: true, // 요청 바디를 DTO 타입으로 자동 변환
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('API 문서 제목')
    .setDescription('API 설명')
    .setVersion('1.0')
    .addTag('sakila database example')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
