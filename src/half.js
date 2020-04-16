const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const half = (firstConfig, secondConfig) => {
  const firstConfigValue = firstConfig;
  const secondConfigValue = secondConfig;
  let firstData;
  let secondData;
  if (path.extname(firstConfigValue) === '.json') {
    firstData = JSON.parse(fs.readFileSync(firstConfigValue));
  } else if (path.extname(firstConfigValue) === '.yml') {
    firstData = yaml.safeLoad(fs.readFileSync(firstConfigValue));
    console.log(firstData);
  }
  if (path.extname(secondConfigValue) === '.json') {
    secondData = JSON.parse(fs.readFileSync(secondConfigValue));
  } else if (path.extname(secondConfigValue) === '.yml') {
    secondData = yaml.safeLoad(fs.readFileSync(secondConfigValue));
  }
  // const firstData = JSON.parse(fs.readFileSync(firstConfigValue));
  // const secondData = JSON.parse(fs.readFileSync(secondConfigValue));
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

  return result.join('\n');
};

export default half;
