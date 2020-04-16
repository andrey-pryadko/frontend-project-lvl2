import parseDataFromFile from './parser';

const half = (path1, path2) => {
  const firstData = parseDataFromFile(path1);
  const secondData = parseDataFromFile(path2);
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
