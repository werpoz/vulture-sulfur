/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { Logger } from '@nestjs/common';
import filenameConfig from './filename.config';
import { getEnvironment } from './env.utils';

export default () => {
  const logger = new Logger('Environment');
  logger.verbose(`Application running on env \'${getEnvironment()}\'`);
  logger.verbose(`Application running on env file \'${filenameConfig()}\'`);
};
