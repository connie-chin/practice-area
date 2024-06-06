/* exported isVowel */
function isVowel(char) {
  let newChar = char.toLowerCase();
  if (
    newChar === 'a' ||
    newChar === 'e' ||
    newChar === 'i' ||
    newChar === 'o' ||
    newChar === 'u'
  ) {
    return true;
  }
  return false;
}
