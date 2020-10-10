import * as jwt from 'jsonwebtoken';
import { HttpException, HttpStatus, createParamDecorator } from '@nestjs/common';
import { JWT_SECRET } from '../config';

export const JwtDecode = createParamDecorator((_, request: any) => {
  try {
    const token = request.headers.authorization.split(' ')[1];
    return jwt.verify(token, JWT_SECRET);
  } catch {
    throw new HttpException('process require login', HttpStatus.UNAUTHORIZED);
  }
});

export interface JwtUser {
  id: string;
}