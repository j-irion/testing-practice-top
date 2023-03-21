import { capitalize } from './capitalize';

test('test -> Test', () => {
  expect(capitalize('test')).toBe('Test');
});

test('Test -> Test', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('TEST -> TEST', () => {
  expect(capitalize('TEST')).toBe('TEST');
});
