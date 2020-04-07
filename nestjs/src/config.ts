
import * as _ from 'lodash';
import * as dotenv from 'dotenv';

dotenv.config();

type Env = 'production' | 'development' | 'test'

export const config = {
  env:        process.env.NODE_ENV as Env,
  jwt_secret: process.env.JWT_SECRET,
  db_name:    process.env.DATABASE_NAME || "cublood",
  host:       process.env.HOST || '0.0.0.0',
  port:       +(process.env.PORT || 3000),
};

if (!process.env.JEST_WORKER_ID) {
  console.log(config);
  console.log(`API http://${config.host}:${config.port}`);
}

if (!_.includes(['production', 'development', 'test'], config.env)) {
  throw new TypeError(`config env [${config.env}] is wrong format`);
}

for (const [k, v] of _.toPairs(config)) {
  if (!v) {
    throw new TypeError(`config env [${k}] is required`);
  }
}