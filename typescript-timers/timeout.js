'use strict';
const $h1 = document.querySelector('.message');
if (!$h1) throw new Error('this $h1 query failed');
setTimeout(() => {
  $h1.textContent = 'Hello There';
}, 2000);
