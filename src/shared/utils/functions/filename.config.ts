/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { ENV } from '../enum/env.enum';
import { isProduction } from './env.utils';

export default () => {
  return isProduction() ? ENV.FILE_PRODUCTION : ENV.FILE_DEVELOPMENT;
};
