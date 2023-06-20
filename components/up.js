import { stdout, cwd } from 'process';
import path from 'path';
import os from 'os';

export const up = () => {
  process.chdir(path.join(os.homedir(), '..'));
  stdout.write(`You are currently in ${cwd()}\n`);
};
