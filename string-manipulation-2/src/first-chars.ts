/* exported firstChars */
const firstChars: any = (length: number, string: string): string => {
  let newString: string = '';
  if (length > string.length) return string;
  for (let i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString;
};
