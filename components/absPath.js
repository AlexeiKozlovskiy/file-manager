import { join, isAbsolute } from 'path';
import { cwd } from 'process';

export const getAbsPath = (path) => {
  return isAbsolute(path) ? path : join(cwd(), path);
};
