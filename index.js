import { argv, stdin, stdout } from 'process';
import readline from 'readline';

const usernameArgv = argv.find((arg) => arg.startsWith('--username'));
const username = usernameArgv ? usernameArgv.slice(11) : 'Noname';
stdout.write(`Welcome to the File Manager, ${username}!\n`);

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.on('line', (input) => {
  if (input === '.exit') {
    rl.close();
  }
});

rl.on('close', () => {
  stdout.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
});
