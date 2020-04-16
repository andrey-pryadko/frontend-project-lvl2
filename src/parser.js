const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const parseDataFromFile = (path1, path2) => {
  const firstExt = path.extname(path1);
  const secondExt = path.extname(path2);
  const firstConfigValue = path1;
  const secondConfigValue = path2;
  let firstData;
  let secondData;
  if (firstExt === '.json') {
    firstData = JSON.parse(fs.readFileSync(firstConfigValue));
  } else if (firstExt === '.yml') {
    firstData = yaml.safeLoad(fs.readFileSync(firstConfigValue));
  }
  if (secondExt === '.json') {
    secondData = JSON.parse(fs.readFileSync(secondConfigValue));
  } else if (secondExt === '.yml') {
    secondData = yaml.safeLoad(fs.readFileSync(secondConfigValue));
  }
  return [firstData, secondData];
};

export default parseDataFromFile;
