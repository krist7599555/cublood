import * as _ from 'lodash';
import { r } from 'rethinkdb-ts'
import { User } from '../store/user.model';
export { r };
export const users = r.table<User>('users')
export const conn = r.connect({ db: "cublood" })
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export async function run<T>(cmd: T): ReturnType<T["run"]> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return cmd.run(await conn);
}

(async function __init__(){
  await run(r.dbCreate('cublood')).catch(_.noop)
  await run(r.tableCreate('users')).catch(_.noop)
  await run(users.indexCreate('email')).catch(_.noop)
  await run(users.indexCreate('phone')).catch(_.noop)
})()