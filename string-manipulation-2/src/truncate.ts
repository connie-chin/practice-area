/* exported truncate */
function truncate(length: number, string: string): string {
  let newWord: string = '';
  if (length > string.length) return `${string}...`;
  for (let i = 0; i < length; i++) {
    newWord += string[i];
  }
  return `${newWord}...`;
}
