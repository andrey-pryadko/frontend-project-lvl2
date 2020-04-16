#!/usr/bin/env node

import half from '../index';

const { program } = require('commander');

program
  .version('0.0.53')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(half(firstConfig, secondConfig));
  });

program.parse(program.args);
