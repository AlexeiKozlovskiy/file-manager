import { join, isAbsolute } from 'path';
import { cwd } from 'process';
import { access } from 'fs/promises';

export const getAbsPath = (path) => {
  return isAbsolute(path) ? path : join(cwd(), path);
};

export const alreadyExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;
  }
};
