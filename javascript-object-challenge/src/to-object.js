/* exported toObject */
function toObject(keyValuePair) {
  // const prop = keyValuePair[0];
  // const value = keyValuePair[1];
  // const newObj = {};
  // newObj[prop] = value; //remember bracket vs dot. dot for when you have the literal name only
  // return newObj;
  const newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
