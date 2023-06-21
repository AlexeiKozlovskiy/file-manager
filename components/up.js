import { cwd, chdir } from 'process';
import path from 'path';

export const up = () => {
  chdir(path.join(cwd(), '..'));
};
