/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const newArr: any[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) newArr.push(values[i]);
  }
  return newArr;
}
