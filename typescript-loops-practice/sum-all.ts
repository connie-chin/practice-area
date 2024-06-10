/* exported sumAll */
const sumAll: any = (numbers: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
