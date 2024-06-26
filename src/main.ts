import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.useGlobalPipes(new ValidationPipe()) // comment this because the validation is not applied on the routes
  const config = new DocumentBuilder()
    .setTitle('Offer API Documentation')
    .setDescription('Providing API to manage offers')
    .setVersion('1.0')
    .addTag('offers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);

}
bootstrap();
