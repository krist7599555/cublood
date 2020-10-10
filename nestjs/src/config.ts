import * as dotenv from 'dotenv'
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, "../.env.default") });
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export enum NodeEnv {
  test        = 'test',
  development = 'development',
  production  = 'production',
}
function cassert<T>(value: T, err_msg = "some .env is missing") {
  if (!value) throw new TypeError(err_msg)
  return value;
} 

export const NODE_ENV      = cassert(process.env.NODE_ENV);
export const JWT_SECRET    = cassert(process.env.JWT_SECRET);
export const DATABASE_NAME = cassert(process.env.DATABASE_NAME);
export const HOST          = cassert(process.env.HOST);
export const PORT          =+cassert(process.env.PORT);

if (!process.env.JEST_WORKER_ID) {
  console.log(`API http://${HOST}:${PORT}`)
}
