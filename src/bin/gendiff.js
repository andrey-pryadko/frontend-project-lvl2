#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');

program
  .version('0.0.50')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    const firstConfigValue = firstConfig;
    const secondConfigValue = secondConfig;
    const firstData = JSON.parse(fs.readFileSync(firstConfigValue));
    const secondData = JSON.parse(fs.readFileSync(secondConfigValue));
    const result = [['\n{']];
    const tab = '  ';
    const secondKeys = Object.keys(secondData);
    const firstKeys = Object.keys(firstData).map((key) => {
      if (secondKeys.includes(key)) {
        if (firstData[key] === secondData[key]) {
          result.push([`${tab}${tab}${key} = ${firstData[key]}`]);
        } else {
          result.push([`${tab}- ${key} = ${firstData[key]}`]);
          result.push([`${tab}+ ${key} = ${secondData[key]}`]);
        }
      } else {
        result.push([`${tab}- ${key} = ${firstData[key]}`]);
      }
      return key;
    });

    secondKeys.map((key) => {
      if (!firstKeys.includes(key)) {
        result.push([`${tab}+ ${key} = ${secondData[key]}`]);
      }
      return key;
    });

    result.push(['}']);

    console.log(result.join('\n'));

  });


program.parse(process.argv);

if (program.format) console.log('Test format OK');

// console.log(program.args);
