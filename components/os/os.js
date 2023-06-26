import { stdout, cwd } from 'process';
import * as OS from 'os';

export const os = (args) => {
  const params = args[0];

  if (params === '--EOL') {
    stdout.write(`Default system End-Of-Line: ${OS.EOL}`);
  }
  if (params === '--cpus') {
    const cpus = OS.cpus();
    stdout.write(`Overall amount of CPUS: ${cpus.length}\n`);
    cpus.forEach((cpu) => {
      stdout.write(`Model: ${cpu.model}\n`);
      stdout.write(`Сpu frequency: ${cpu.speed / 1000}GHz\n`);
    });
  }
  if (params === '--homedir') {
    stdout.write(`Home directory: ${cwd()}\n`);
  }
  if (params === '--username') {
    stdout.write(`User name: ${OS.userInfo().username}\n`);
  }
  if (params === '--architecture') {
    stdout.write(`CPU architecture: ${OS.arch()}\n`);
  }
};
