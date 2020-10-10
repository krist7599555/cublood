import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersController } from './users.controller';


@Module({
  controllers: [UsersController],
  providers:   [UserService],
  exports:     [UserService]
})
export class StoreModule {}
