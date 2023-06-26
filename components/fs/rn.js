import { rename, stat } from 'fs/promises';
import { stdout } from 'process';
import { getAbsPath, alreadyExists } from '../utils.js';

export const rn = async (args) => {
  try {
    if ((await stat(getAbsPath(args[0]))).isDirectory()) {
      stdout.write(`Directory not a file\n`);
      throw new Error();
    }

    if (await alreadyExists(getAbsPath(args[1]))) {
      stdout.write(`This name is already in use\n`);
      throw new Error();
    }

    await rename(getAbsPath(args[0]), getAbsPath(args[1]));
    stdout.write(`File renamed\n`);
  } catch (err) {
    stdout.write(`Operation failed\n`);

    if (err.code === 'ENOENT') {
      stdout.write(`No such file ${getAbsPath(args[0])}\n`);
    }
  }
};
