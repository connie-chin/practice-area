/* exported swapChars */
const swapChars: any = (
  firstIndex: number,
  secondIndex: number,
  string: string,
): string => {
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
