import * as _ from 'lodash';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Response, Request } from 'express'


@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // @ts-ignore
    const validates = exception.getResponse()?.message
    if (validates?.[0] instanceof ValidationError) {
      response
        .status(exception.getStatus() || 400)
        .json({
          path:     request.url,
          message:  "validation error, input is wrong format",
          validate: _.fromPairs(validates.map(v => {
            return [v.property, _.values(v.constraints)]
          }))
        })
    } else {
      response
        .status(400)
        .json({
          path:   request.url,
          messag: "bad request, input might be wrong format"
        });
    }
  }
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    
    const ctx      = host.switchToHttp();
    const response = ctx.getResponse();
    const request  = ctx.getRequest();
    const status   =
    exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      code:      status,
      path:      request.url,
      timestamp: new Date().getTime() / 1000,
      message:   exception?.message?.message || exception?.message
    });
  }
}