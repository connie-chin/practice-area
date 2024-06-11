/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  const wordArray: string[] = string.split(' ');
  const capitalizedArr: string[] = [];
  for (let i = 0; i < wordArray.length; i++) {
    const word: string = wordArray[i];
    const capitalizedWord: string = `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
    capitalizedArr.push(capitalizedWord);
  }
  return capitalizedArr.join(' ');
}
