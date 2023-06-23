import { basename, join } from 'path';
import { stat } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import { getAbsPath, alreadyExists } from '../utils.js';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { stdout } from 'process';

export const decompress = async (args) => {
  const filePath = getAbsPath(args[0]);
  const filename = basename(filePath, '.br');
  const newFilePath = join(getAbsPath(args[1]), filename);

  try {
    if (!(await alreadyExists(filePath)) || (await stat(filePath)).isDirectory() ) {
      stdout.write(`Such file or directory no exists\n`);
      throw new Error();
    }
    await pipeline(
      createReadStream(filePath),
      createBrotliDecompress(),
      createWriteStream(newFilePath)
    );
    stdout.write(`File ${filePath} is compressed to ${newFilePath}\n`);
  } catch (err) {
    stdout.write(`Operation failed\n`);
    if (err.code === 'ENOENT') {
      stdout.write(`Such file or directory no exists\n`);
    }
  }
};
