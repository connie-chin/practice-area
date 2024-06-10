"use strict";
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
    let numbers = [];
    let currentNumber = 1;
    while (currentNumber <= 10) {
        numbers.push(currentNumber);
        currentNumber++;
    }
    return numbers;
}
console.log('getEvenNumberToTen:', getNumbersToTen());
const getEvenNumbersToTwenty = () => {
    let evenNumbers = [];
    let currentNumber = 2;
    while (currentNumber <= 20) {
        evenNumbers.push(currentNumber);
        currentNumber = currentNumber + 2;
    }
    return evenNumbers;
};
console.log('getEvenNumbersToTwenty:', getEvenNumbersToTwenty());
const repeatWord = (word, times) => {
    let count = 1;
    let repeated = '';
    while (count <= times) {
        repeated += word;
        count++;
    }
    return repeated;
};
console.log('repeatWord:', repeatWord('phone', 6));
function logEachCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}
logEachCharacter('Georgie');
const doubleAll = (numbers) => {
    let doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled;
};
console.log('doubleAll:', doubleAll([2, 4, 6, 8]));
function getKeys(object) {
    let keys = [];
    for (const key in object) {
        keys.push(key);
    }
    return keys;
}
// interface Person {
//   name: string;
//   age: number;
//   city: string;
// }
const person1 = {
    name: 'connie',
    age: 28,
    city: 'Long Beach'
};
const person2 = {
    name: 'jess',
    age: 30,
    city: 'Phoenix'
};
console.log(getKeys(person1));
const getValues = (object) => {
    let values = [];
    for (const key in object) {
        values.push(object[key]);
    }
    return values;
};
console.log(getValues(person2));
