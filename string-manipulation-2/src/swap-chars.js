'use strict';
/* exported swapChars */
const swapChars = (firstIndex, secondIndex, string) => {
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newWord += string[secondIndex];
    } else if (i === secondIndex) {
      newWord += string[firstIndex];
    } else {
      newWord += string[i];
    }
  }
  return newWord;
};
