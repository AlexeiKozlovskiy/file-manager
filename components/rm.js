import { getAbsPath } from './utils.js';
import { unlink } from 'fs/promises';
import { stdout } from 'process';

export const rm = async (args) => {
  try {
    const absFilePath = getAbsPath(args[0]);
    await unlink(absFilePath);
    stdout.write(`File removed\n`);
  } catch (err) {
    stdout.write(`Operation failed\n`);
    
    if (err.code === 'ENOENT') {
      stdout.write(`No such file exists\n`);
    }
  }
};
