/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

export const getEnvironment = (): string => {
  const env = process.env.NODE_ENV || 'development';

  if (env === 'development') {
    return 'development';
  } else if (env === 'production') {
    return 'production';
  } else {
    return 'unknown';
  }
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};
