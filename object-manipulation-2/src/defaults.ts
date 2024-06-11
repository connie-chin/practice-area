/* exported defaults */
function defaults(target:Record<string, unknown>, source:Record<string, unknown>) : any {
  for (const key in source) {
    if(typeof target[key] === 'undefined') target[key] = source[key];
  }
  return target;
}
