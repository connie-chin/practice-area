'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) newWord += string[i].toLowerCase();
    else newWord += string[i].toUpperCase();
  }
  return newWord;
}
