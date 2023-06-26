import { argv, stdin, stdout, cwd, chdir } from 'process';
import readline from 'readline';
import os from 'os';
import { getCommand } from './components/commands.js';

let currentPath = os.homedir();
chdir(currentPath);

const usernameArgv = argv.find((arg) => arg.startsWith('--username'));
const username = usernameArgv ? usernameArgv.slice(11) : 'Noname';
const showMessage = (currentPath) => {
  stdout.write(`\nYou are currently in ${currentPath}\n`);
  stdout.write(`Enter your command\n`);
  stdout.write(`________________________________________________\n`);

};

stdout.write(`Welcome to the File Manager, ${username}!\n`);

showMessage(currentPath);

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.on('line', async (input) => {
  if (input === '.exit') {
    rl.close();
    return;
  }
  try {
    const inputValues = input.split(' ').filter((value) => value !== '');
    const [command, ...commandValues] = inputValues;
    const commands = getCommand(command, commandValues);
    await commands(commandValues);
  } catch (err) {
    stdout.write(`${err.message}\n`);
  }
  showMessage(cwd());
});

rl.on('close', () => {
  stdout.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
});
