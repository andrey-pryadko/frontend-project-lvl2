#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');

program
  .version('0.0.50')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action(function (firstConfig, secondConfig) {
    const firstConfigValue = firstConfig;
    const secondConfigValue = secondConfig;
    const firstData = JSON.parse(fs.readFileSync(firstConfigValue));
    const secondData = JSON.parse(fs.readFileSync(secondConfigValue));
    console.log(firstData);
    console.log(secondData);
  });


program.parse(process.argv);

if (program.format) console.log('Test format OK');

// console.log(program.args);

