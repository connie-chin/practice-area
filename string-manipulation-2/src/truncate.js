'use strict';
/* exported truncate */
function truncate(length, string) {
  let newWord = '';
  if (length > string.length) return `${string}...`;
  for (let i = 0; i < length; i++) {
    newWord += string[i];
  }
  return `${newWord}...`;
}
