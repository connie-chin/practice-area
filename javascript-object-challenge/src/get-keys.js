/* exported getKeys */
function getKeys(object) {
  let newArr = [];
  for (const prop in object) {
    newArr.push(prop);
  }
  return newArr;
}
