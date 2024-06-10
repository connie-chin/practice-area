/* exported oddOrEven */
const oddOrEven: any = (numbers: number[]): string[] => {
  const newArr: string[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) newArr.push('even');
    else newArr.push('odd');
  }
  return newArr;
};
