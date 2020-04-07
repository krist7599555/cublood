import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports:     [StoreModule, AuthModule],
  controllers: [AppController],
  providers:   [AppService],
})
export class AppModule {}
