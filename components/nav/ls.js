import { cwd, stdout } from 'process';
import { readdir } from 'fs/promises';

export const ls = async () => {
  try {
    let currentPath = cwd();
    const content = await readdir(currentPath, { withFileTypes: true });

    if (content.length === 0) {
      stdout.write(`Empty directory\n`);
    } else {
      console.table(
        content.map((el) => {
          return {
            Name: el.name,
            Type: el.isDirectory() ? 'directory' : 'file',
          };
        })
      );
    }
  } catch (err) {
    throw new Error('Operation failed\n`');
  }
};
