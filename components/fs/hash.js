import { getAbsPath } from '../utils.js';
import { readFile } from 'fs/promises';
import { stdout } from 'process';
import { createHash } from 'crypto';

export const hash = async (args) => {
  const filePath = getAbsPath(args[0]);
  try {
    const content = await readFile(filePath);
    const hash = createHash('sha256').update(content).digest('hex');
    stdout.write(`Hash for file: ${hash}\n`);
  } catch (err) {
    stdout.write(`Operation failed\n`);
    if (err.code === 'ENOENT') {
      stdout.write(`Such file or directory no exists\n`);
    }
  }
};
