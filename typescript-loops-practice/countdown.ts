/* exported countdown */
function countdown(number: number): number[] {
  const newArr: number[] = [];
  let currentNum: number = number;
  while (currentNum >= 0) {
    newArr.push(currentNum);
    currentNum--;
  }
  return newArr;
}
