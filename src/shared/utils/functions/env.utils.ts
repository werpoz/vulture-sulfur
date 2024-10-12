/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { ENV } from '../enum/env.enum';

export const getEnvironment = (): string => {
  const env = process.env.NODE_ENV || ENV.DEVELOPMENT;
  if (env === ENV.DEVELOPMENT) {
    return ENV.DEVELOPMENT;
  } else if (env === ENV.PRODUCTION) {
    return ENV.PRODUCTION;
  } else {
    throw Error(
      `only environment \'${ENV.DEVELOPMENT}\' or \'${ENV.PRODUCTION}\'`,
    );
  }
};

export const isDevelopment = (): boolean => {
  return getEnvironment() === ENV.DEVELOPMENT;
};

export const isProduction = (): boolean => {
  return getEnvironment() === ENV.PRODUCTION;
};
