import { Injectable } from "@nestjs/common";
import { run, users } from '../helper/rethinkdb.pool'
import { User } from './user.model';

@Injectable()
export class UserService {
  create(user: User) {
    return run(users.insert(user, { conflict: "error" }))
  }
  get(id: string) {
    return run(users.get(id))
  }
  filter(query: Partial<User> = {}) {
    return run(users.filter(query))
  }
  update(id: string, user: Partial<User>) {
    return run(users.get(id).update(user));
  }
}