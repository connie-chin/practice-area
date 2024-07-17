const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((value) => console.log(value)); // just returns elements. callback function doesnt do anything?

console.log('Reverse order:');
values.forEach((value, index) =>
  console.log(values[values.length - 1 - index]),
); // we just need the second value, which will always be the index, and we are printing values at the last element (length-1 - index) first round index is 0, 1, 2, etc

const nums: number[] = [1, 2, 3, 4, 5];
console.log('In order:');
nums.forEach((num) => console.log(num));

console.log('Reverse order:');
nums.forEach((num, index) => console.log(nums[nums.length - 1 - index]));

console.log('in order:');
const letters: string[] = ['a', 'b', 'c', 'd', 'e'];
letters.forEach((letter) => console.log(letter));

console.log('reverse order:');
letters.forEach((letter, index) =>
  console.log(letters[letters.length - 1 - index]),
);
