const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbers = numbers.filter((number) => number % 2 === 0); // creates a new array with elements that pass the test
console.log('evenNumbers:', evenNumbers);

const noD = names.filter((name) => !name.toUpperCase().includes('D'));
console.log('noD:', noD);
