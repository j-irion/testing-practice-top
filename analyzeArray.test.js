import { analyzeArray } from './analyzeArray';

test('returns the correct average, min, max, and length for an array of numbers', () => {
  const array = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(array);
  expect(result.average).toBe(4);
  expect(result.min).toBe(1);
  expect(result.max).toBe(8);
  expect(result.length).toBe(6);
});

test('returns the correct values for an array of all negative numbers', () => {
  const array = [-3, -8, -2, -4, -6];
  const result = analyzeArray(array);
  expect(result.average).toBe(-4.6);
  expect(result.min).toBe(-8);
  expect(result.max).toBe(-2);
  expect(result.length).toBe(5);
});

test('returns the correct values for an array with one element', () => {
  const array = [5];
  const result = analyzeArray(array);
  expect(result.average).toBe(5);
  expect(result.min).toBe(5);
  expect(result.max).toBe(5);
  expect(result.length).toBe(1);
});

test('returns NaN for average when given an empty array', () => {
  const array = [];
  const result = analyzeArray(array);
  expect(isNaN(result.average)).toBe(true);
  expect(result.min).toBe(Infinity);
  expect(result.max).toBe(-Infinity);
  expect(result.length).toBe(0);
});
