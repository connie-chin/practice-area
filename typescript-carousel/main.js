'use strict';
const $carouselImage = document.querySelectorAll('.carousel-image');
const $dots = document.querySelectorAll('.fa-circle');
if (!$carouselImage || !$dots)
  throw new Error('This $carouselImage or $dots query failed');
console.log('$carouselImage:', $carouselImage);
console.log('$dots:', $dots);
function updateCarousel() {
  for (let i = 0; i < $carouselImage.length; i++) {
    if (index === i) {
      $carouselImage[i].classList.remove('hidden');
      $dots[i].classList.add('fa-solid');
      $dots[i].classList.remove('fa-regular');
    } else {
      $carouselImage[i].classList.add('hidden');
      $dots[i].classList.remove('fa-solid');
      $dots[i].classList.add('fa-regular');
    }
  }
}
let index = 0;
updateCarousel();
setInterval(() => {
  index = (index + 1) % $carouselImage.length;
  updateCarousel();
}, 3000);
//able to loop through images automatically right now. still need to understand a little more.
