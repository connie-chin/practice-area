/* exported addSuffixToAll */
const addSuffixToAll: any = (words: string[], suffix: string): string[] => {
  const newArr: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const newWord: string = `${words[i] + suffix}`;
    newArr.push(newWord);
  }
  return newArr;
};
