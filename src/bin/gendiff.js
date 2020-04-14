#!/usr/bin/env node

const program = require('commander');

program
  .version('0.0.50')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  // .action(function (cmd, firstConfig, secondConfig) {
  //   cmdValue = cmd;
  //   firstConfigValue = firstConfig;
  //   secondConfigValue = secondConfig;
  // });

program.parse(process.argv);

if (program.format) console.log('Test format OK');

// if ((typeof firstConfigValue === undefined) ||  (typeof secondConfigValue === undefined)) {
//   console.error('no config given!');
//   process.exit(1);
// }

console.log(program.args);

