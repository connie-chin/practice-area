"use strict";
/* exported invert */
function invert(source) {
    const newObject = {};
    for (const key in source) {
        let newKey = source[key];
        let newValue = key;
        newObject[newKey] = newValue;
    }
    return newObject;
}
