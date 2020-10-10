import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller("/api/users")
export class UsersController {
  constructor(private userService: UserService) {}
  @Get("/")
  index() {
    return this.userService.filter();
  }
  @Get("/:id")
  show(@Param('id') id: string) {
    return this.userService.get(id);
  }
  
  @Patch('/:id')
  update(@Param('id') id: string, @Body() user: Partial<User>) {
    return this.userService.update(id, user);
  }
}