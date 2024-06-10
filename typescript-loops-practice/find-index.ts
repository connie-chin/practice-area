/* exported findIndex */
function findIndex(array: number[], value: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
