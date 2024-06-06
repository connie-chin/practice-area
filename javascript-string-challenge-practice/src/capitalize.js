/* exported capitalize */
function capitalize(string) {
  let newWord = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    newWord += string[i].toLowerCase();
  }
  return newWord;
}
