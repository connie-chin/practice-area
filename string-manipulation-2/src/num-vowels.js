'use strict';
/* exported numVowels */
const numVowels = (string) => {
  let vowelCount = 0;
  let newString = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (
      newString[i] === 'a' ||
      newString[i] === 'e' ||
      newString[i] === 'i' ||
      newString[i] === 'o' ||
      newString[i] === 'u'
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
};
