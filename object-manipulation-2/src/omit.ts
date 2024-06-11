/* exported omit */
function omit (source:Record<string, unknown>, keys:string[]) {
  const newObject: any = {};
  for (const key in source) {
    if (!keys.includes(key)) newObject[key] = source[key];
  }
  return newObject;
}
