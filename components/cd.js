import { chdir, stdout, cwd } from 'process';
import { getAbsPath } from './absPath.js';

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
