"use strict";
/* exported pick */
function pick(source, keys) {
    const newObject = {};
    for (const key in source) {
        for (let i = 0; i < keys.length; i++) {
            if (key === keys[i] && source[key] !== undefined)
                newObject[key] = source[key];
        } //using source[key] instead of keys[i] bc thats our actual object
    }
    return newObject;
}
