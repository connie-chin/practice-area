'use strict';
const $lightBulb = document.querySelector('.light-bulb');
const $container = document.querySelector('.container');
if (!$lightBulb || !$container)
  throw new Error('This $lightBulb or $container query failed');
// let isOn = true;
$lightBulb.addEventListener('click', () => {
  $container.classList.toggle('container-off');
  $lightBulb.classList.toggle('light-bulb-off');
}); //with this, only have css for changing colors. less code for sure!
// $lightBulb.addEventListener('click', () => {
//   isOn = !isOn;
//   if (isOn === false){
//   $container.className='container-off';
//   $lightBulb.className='light-bulb-off';
//   }
//   if (isOn === true) {
//     $container.className = 'container';
//     $lightBulb.className='light-bulb';
//   }
// }) //with this route, need to have matching css for both on and off.
