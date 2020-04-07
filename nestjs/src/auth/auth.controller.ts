import { Controller, Post, Body } from '@nestjs/common';
import { User } from '../store/user.model';
import { UserService } from '../store/user.service';

@Controller('/api')
export class AuthController {

  constructor(private users: UserService) {}

  @Post("/register")
  register(@Body() user: User) {
    return this.users.create(user);
  }

}
