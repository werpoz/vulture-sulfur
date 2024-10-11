/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class PerformanceInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request: Request = context.switchToHttp().getRequest();
    const start: number = Date.now();
    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start;
        Logger.debug(
          `Request {${request.url}, ${request.method}} route +${duration}ms \r\n
         ${JSON.stringify(request.body)} \r\n`,
          `${[context.getClass().name]}`,
        );
      }),
    );
  }
}
