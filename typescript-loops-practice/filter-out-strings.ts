/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const newArr: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') newArr.push(values[i]);
  }
  return newArr;
}
