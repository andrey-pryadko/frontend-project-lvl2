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
  }
  return data;
};

export default parseDataFromFile;
