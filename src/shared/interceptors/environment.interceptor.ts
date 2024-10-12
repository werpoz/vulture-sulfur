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
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getEnvironment } from '../utils/functions/env.utils';

@Injectable()
export class EnvironmentInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const response = context.switchToHttp().getResponse();

    const env = getEnvironment();
    response.setHeader('X-Env', `${env}`);
    response.setHeader('X-Powered-By', 'NestJS');

    return next.handle().pipe(
      map((data) => {
        return data;
      }),
    );
  }
}
