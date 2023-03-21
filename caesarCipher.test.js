import { caesarCipher } from './caesarCipher';

test('simple test', () => {
  expect(caesarCipher('test', 1)).toMatch('uftu');
});

test('zebra -> ', () => {
  expect(caesarCipher('zebra', 3)).toMatch('cheud');
});

test('abc -> xyz', () => {
  expect(caesarCipher('abc', -3)).toMatch('xyz');
});

test('shifts input string by given shift amount', () => {
  const inputString = 'hello';
  const shift = 2;
  const expectedOutput = 'jgnnq';
  expect(caesarCipher(inputString, shift)).toEqual(expectedOutput);
});

test('handles shift amounts greater than 26', () => {
  const inputString = 'hello';
  const shift = 30;
  const expectedOutput = 'lipps';
  expect(caesarCipher(inputString, shift)).toEqual(expectedOutput);
});

test('ignores non-alphabetic characters', () => {
  const inputString = 'hello world!';
  const shift = 3;
  const expectedOutput = 'khoor zruog!';
  expect(caesarCipher(inputString, shift)).toEqual(expectedOutput);
});
