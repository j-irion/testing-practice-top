export const analyzeArray = (numbers) => {
  const avg = numbers.reduce((total, num) => total + num, 0) / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const length = numbers.length;
  return {
    average: avg,
    min: min,
    max: max,
    length: length,
  };
};
