import { writeFile } from 'node:fs/promises';
import path from 'path';
import { cwd, stdout } from 'process';

export const add = async (fileName) => {
  try {
    await writeFile(path.join(cwd(), fileName[0]), '', { flag: 'wx' });
    stdout.write(`New file created\n`);
  } catch (err) {
    stdout.write(`Operation failed\n`);
  }
};
