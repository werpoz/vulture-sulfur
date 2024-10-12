/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import initializeLogger from './shared/utils/functions/initialize.logger';
import { getInterceptorsByEnvironment } from './shared/utils/functions/interceptors.util';

async function bootstrap() {
  initializeLogger();
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(...getInterceptorsByEnvironment());
  await app.listen(3000);
}
bootstrap();
