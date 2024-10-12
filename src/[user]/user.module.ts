/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Module } from '@nestjs/common';
import { UserController } from './application/controllers/user.controller';
import { UserCreatedListener } from './infrastructure/listeners/user-created.listener';
import { UserService } from './application/services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserCreatedListener],
  exports: [UserService],
})
export class UserModule {}
