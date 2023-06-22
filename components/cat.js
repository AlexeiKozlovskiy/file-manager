import { createReadStream } from 'fs';
import { stdout } from 'process';
import { getAbsPath } from './absPath.js';

export const cat = async (filePath) => {
  const stream = createReadStream(getAbsPath(filePath[0]), 'utf-8');

  return new Promise((resolve, reject) => {
    let content = '';
    stream.on('data', (chunk) => (content += chunk));
    stream.on('end', () => resolve(content));
    stream.on('error', (err) => reject(err));
  })
    .then((content) => stdout.write(`File content: ${content}\n`))
    .catch((err) => {
      stdout.write(`Operation failed\n`);
      if (err.code === 'ENOENT') {
        stdout.write(`No such path\n`);
      }
    });
};
