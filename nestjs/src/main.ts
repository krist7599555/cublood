import { AllExceptionsFilter, BadRequestExceptionFilter } from './helper/exception.filter';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { config } from './config';
import * as expressListRoutes from 'express-list-routes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = await app
    .useGlobalFilters(new AllExceptionsFilter())
    .useGlobalFilters(new BadRequestExceptionFilter())
    .useGlobalPipes(new ValidationPipe({ transform: true }))
    .listen(config.port);
  const router = server._events.request._router;
  expressListRoutes({}, 'API:', router);
}
bootstrap();