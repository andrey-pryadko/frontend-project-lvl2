const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const ini = require('ini');

const parseDataFromFile = (src) => {
  const ext = path.extname(src);
  const configValue = src;
  let data;
  if (ext === '.json') {
    data = JSON.parse(fs.readFileSync(configValue));
  } else if (ext === '.yml') {
    data = yaml.safeLoad(fs.readFileSync(configValue));
  } else if (ext === '.ini') {
    data = ini.parse(fs.readFileSync(configValue, 'utf-8'));
  }
  return data;
};

export default parseDataFromFile;
