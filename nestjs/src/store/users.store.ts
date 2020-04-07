import { Injectable } from "@nestjs/common";
import { run, users } from '../helper/rethinkdb.pool'
import { User } from './user.model';

@Injectable()
export class UsersStore {
  create(user: User) {
    return run(users.insert(user, { conflict: "error" }))
  }
  get(id: string) {
    return run(users.get(id))
  }
}