/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { isProduction } from '@/utils/env.utils';

export default () => {
  return isProduction() ? '.env' : '.env.local';
};
