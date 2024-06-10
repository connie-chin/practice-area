/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const newArr: any[] = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(i);
  }
  return newArr;
}
