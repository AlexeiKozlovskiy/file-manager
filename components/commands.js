import { up } from './nav/up.js';
import { cd } from './nav/cd.js';
import { ls } from './nav/ls.js';
import { cat } from './fs/cat.js';
import { add } from './fs/add.js';
import { rn } from './fs/rn.js';
import { cp } from './fs/cp.js';
import { mv } from './fs/mv.js';
import { rm } from './fs/rm.js';
import { os } from './os/os.js';
import { hash } from './fs/hash.js';
import { compress } from './zip/compress.js';
import { decompress } from './zip/decompress.js';

const commands = [
  {
    command: up,
    argsValue: 0,
  },
  {
    command: cd,
    argsValue: 1,
  },
  {
    command: ls,
    argsValue: 0,
  },
  {
    command: cat,
    argsValue: 1,
  },
  {
    command: add,
    argsValue: 1,
  },
  {
    command: rn,
    argsValue: 2,
  },
  {
    command: cp,
    argsValue: 2,
  },
  {
    command: rm,
    argsValue: 1,
  },
  {
    command: mv,
    argsValue: 2,
  },
  {
    command: os,
    argsValue: 1,
  },
  {
    command: hash,
    argsValue: 1,
  },
  {
    command: compress,
    argsValue: 2,
  },
  {
    command: decompress,
    argsValue: 2,
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
