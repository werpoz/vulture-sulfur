/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { EnvironmentInterceptor } from '@/shared/interceptors/environment.interceptor';
import { PerformanceInterceptor } from '@/shared/interceptors/performance.interceptor';
import { isDevelopment } from './env.utils';
import { NestInterceptor } from '@nestjs/common';

export function getInterceptorsByEnvironment() {
  const productionInterceptors: Array<NestInterceptor> = [];
  if (isDevelopment()) {
    const developmentInterceptors = [
      new EnvironmentInterceptor(),
      new PerformanceInterceptor(),
    ];
    return [...developmentInterceptors, ...productionInterceptors];
  } else {
    return productionInterceptors;
  }
}
