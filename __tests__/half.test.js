import half from '../src/index';

const result = `
{
    host = hexlet.io
  - timeout = 50
  + timeout = 20
  - proxy = 123.234.53.22
  - follow = false
  + verbose = true
}`;

test('test1', () => {
  expect(half('./__fixtures__/before.json', './__fixtures__/after.json')).toBe(result);
});
