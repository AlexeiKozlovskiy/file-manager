import { argv, stdin, stdout } from 'process';
import readline from 'readline';
import os from 'os';

let currentPath = os.homedir();
const usernameArgv = argv.find((arg) => arg.startsWith('--username'));
const username = usernameArgv ? usernameArgv.slice(11) : 'Noname';
stdout.write(`Welcome to the File Manager, ${username}!\n`);
stdout.write(`You are currently in ${currentPath}\n`);

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.on('line', (input) => {
  if (input === '.exit') {
    rl.close();
  }
  stdout.write(`You are currently in ${currentPath}\n`);
});

rl.on('close', () => {
  stdout.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
});
