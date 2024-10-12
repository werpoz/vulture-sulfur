/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import filenameConfig from './shared/utils/functions/filename.config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserModule } from './[user]/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: filenameConfig() }),
    EventEmitterModule.forRoot(),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
