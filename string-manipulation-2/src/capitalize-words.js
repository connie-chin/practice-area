'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  let wordArray = string.split(' ');
  const capitalizedArr = [];
  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i];
    const capitalizedWord = `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
    capitalizedArr.push(capitalizedWord);
  }
  return capitalizedArr.join(' ');
}
