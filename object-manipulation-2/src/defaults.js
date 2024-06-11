"use strict";
/* exported defaults */
function defaults(target, source) {
    for (const key in source) {
        if (typeof target[key] === 'undefined')
            target[key] = source[key];
    }
    return target;
}
