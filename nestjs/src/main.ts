import { AllExceptionsFilter, BadRequestExceptionFilter } from './helper/exception.filter';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { PORT } from './config';
import * as expressListRoutes from 'express-list-routes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = await app
    .useGlobalFilters(new AllExceptionsFilter())
    .useGlobalFilters(new BadRequestExceptionFilter())
    .useGlobalPipes(new ValidationPipe({ transform: true }))
    .listen(PORT);
  const router = server._events.request._router;
  expressListRoutes({}, 'API:', router);
}
bootstrap();