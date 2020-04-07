import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { StoreModule } from '../store/store.module';

@Module({
  controllers: [AuthController],
  imports:     [StoreModule]
})
export class AuthModule {}
