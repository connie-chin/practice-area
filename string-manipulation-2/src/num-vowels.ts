/* exported numVowels */
const numVowels: any = (string: string): number => {
  let vowelCount = 0;
  const newString = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (
      newString[i] === 'a' ||
      newString[i] === 'e' ||
      newString[i] === 'i' ||
      newString[i] === 'o' ||
      newString[i] === 'u'
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
};
