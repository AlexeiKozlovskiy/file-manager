import { basename, join } from 'path';
import { stat } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { getAbsPath, alreadyExists } from '../utils.js';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';
import { unlink } from 'fs/promises';

export const mv = async (args) => {
  const filePath = getAbsPath(args[0]);
  const filename = basename(filePath);
  const newFilePath = join(getAbsPath(args[1]), filename);

  try {
    if (!(await alreadyExists(filePath)) || (await stat(filePath)).isDirectory() ) {
      stdout.write(`Such file or directory no exists\n`);
      throw new Error();
    }
    await pipeline(createReadStream(filePath), createWriteStream(newFilePath));
    await unlink(filePath);
    stdout.write(`File moved\n`);
  } catch (err) {
    stdout.write(`Operation failed\n`);

    if (err.code === 'ENOENT') {
      stdout.write(`Such file or directory no exists\n`);
    }
  }
};
