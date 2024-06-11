/* exported invert */
function invert(source: Record<string, unknown>):any {
  const newObject: any = {};
  for (const key in source){
    let newKey:any = source[key];
    let newValue:string = key;
    newObject[newKey] = newValue;
  }
  return newObject;
}
