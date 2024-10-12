/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { validate, version } from 'uuid';

export class UserId {
  private readonly id: string;

  private isValidUserId(value: string): boolean {
    return validate(value) && version(value) === 4;
  }
}
