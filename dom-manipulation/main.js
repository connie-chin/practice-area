'use strict';
let buttonClicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
// function forClicks() :void {
//   if (!$hotButton || !$clickCount)
//     throw new Error ('The $hotButton or $clickCount query failed');
//   buttonClicks++;
//   $clickCount.textContent = `Clicks: ${buttonClicks}`;
//   if (buttonClicks<4) $hotButton.className = 'hot-button cold';
//   else if (buttonClicks<7) $hotButton.className = 'hot-button cool';
//   else if (buttonClicks<10) $hotButton.className = 'hot-button tepid';
//   else if (buttonClicks<13) $hotButton.className = 'hot-button warm';
//   else if (buttonClicks<16) $hotButton.className = 'hot-button hot';
//   else $hotButton.className = 'hot-button nuclear';
// }
// $hotButton.addEventListener('click', forClicks);
$hotButton.addEventListener('click', () => {
  if (!$hotButton || !$clickCount)
    throw new Error('The $hotButton or $clickCount query failed');
  buttonClicks++;
  $clickCount.textContent = `Clicks: ${buttonClicks}`;
  let temperature;
  if (buttonClicks < 4) temperature = 'cold';
  else if (buttonClicks < 7) temperature = 'cool';
  else if (buttonClicks < 10) temperature = 'tepid';
  else if (buttonClicks < 13) temperature = 'warm';
  else if (buttonClicks < 16) temperature = 'hot';
  else temperature = 'nuclear';
  $hotButton.className = `hot-button ${temperature}`;
});
