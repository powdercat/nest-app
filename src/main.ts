import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // dto 에 정의되지 않은 속성 차단
      transform: true, // 받는 값에 타입을 지정했다면 자체적으로 타입을 변환해준다.
    }),
  );

  await app.listen(3000);
}
bootstrap();
