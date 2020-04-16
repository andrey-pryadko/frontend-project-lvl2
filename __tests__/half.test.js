import half from '../src/index';


test('test 4. ini-ini 1', () => {
  const result4 = `
{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
  expect(half('./__fixtures__/before.ini', './__fixtures__/after.ini')).toBe(result4);
});

test('test 3. yaml-yaml 1', () => {
  const result3 = `
{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
  expect(half('./__fixtures__/before.yml', './__fixtures__/after.yml')).toBe(result3);
});


test('test 2. json-emptyJson', () => {
  const result2 = `
{
  - host: hexlet.io
  - timeout: 50
  - proxy: 123.234.53.22
  - follow: false
}`;
  expect(half('./__fixtures__/before.json', './__fixtures__/empty.json')).toBe(result2);
});

test('test 1. json-json 1', () => {
  const result1 = `
{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
  expect(half('./__fixtures__/before.json', './__fixtures__/after.json')).toBe(result1);
});
