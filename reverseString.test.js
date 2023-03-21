import { reverseString } from './reverseString';

test('Test -> tseT', () => {
  expect(reverseString('Test')).toMatch('tseT');
});

test('reverses a string with an even number of characters', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a string with an odd number of characters', () => {
  expect(reverseString('world')).toBe('dlrow');
});

test('reverses a string containing whitespace', () => {
  expect(reverseString('   hello  ')).toBe('  olleh   ');
});
