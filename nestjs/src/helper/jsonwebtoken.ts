import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config';

export interface JwtData {
  id: string;
  exp: number;
};
export function sign({ id }: JwtData) {
  return jwt.sign({ id }, JWT_SECRET, { algorithm: "ES256" })
}