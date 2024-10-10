/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import filenameConfig from './utils/filename.config';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: filenameConfig() })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
