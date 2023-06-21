import { up } from './up.js';
import { cd } from './cd.js';

const commands = [
  {
    command: up,
    argsValue: 0,
  },
  {
    command: cd,
    argsValue: 1,
  },
];

export const getCommand = (command, commandArgs) => {
  const result = commands.find(
    (el) => el.command.name === command && el.argsValue === commandArgs.length
  );
  if (!result) {
    throw new Error('Invalid input');
  }
  return result.command.bind(null, commandArgs);
};
