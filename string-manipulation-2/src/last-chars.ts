/* exported lastChars */
function lastChars(length: number, string: string): string {
  const newString: string = string.slice(-length);
  return newString;
}
