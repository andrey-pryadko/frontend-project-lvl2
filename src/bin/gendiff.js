#!/usr/bin/env node

const { program } = require('commander');

program
  .option('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number');

program.parse(process.argv);

const helpTxt = `
Usage: gendiff [options]

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -h, --help           output usage information
`;

if (program.help) console.log(helpTxt);
if (program.version) console.log(program.version);