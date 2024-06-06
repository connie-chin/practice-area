/* exported getValues */
function getValues(object) {
  let newArr = [];
  for (const prop in object) {
    newArr.push(object[prop]);
  }
  return newArr;
}
