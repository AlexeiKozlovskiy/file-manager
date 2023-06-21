import { chdir, stdout, cwd } from 'process';
import { join, isAbsolute } from 'path';

const getAbsPath = (path) => {
  return isAbsolute(path) ? path : join(cwd(), path);
};

export const cd = (args) => {
  try {
    chdir(getAbsPath(args[0]));
  } catch (err) {
    stdout.write(`Operation failed\n`);
    if (err.code === 'ENOENT') {
      stdout.write(`No such path ${getAbsPath(args[0])}\n`);
    }
  }
};
