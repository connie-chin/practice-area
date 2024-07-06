'use strict';
const $letters = document.querySelectorAll('span');
if (!$letters) throw new Error('This $letters query failed');
let currentIndex = 0;
let currentLetter = $letters[currentIndex];
// console.log('currentLetter:', currentLetter);
document.addEventListener('keydown', (event) => {
  if (currentIndex === $letters.length) return 0;
  else if (event.key === currentLetter.textContent) {
    currentLetter.className = 'correct';
    currentIndex++;
    currentLetter = $letters[currentIndex]; //updating current letter with new currentIndex after its been incremented
    currentLetter.className = 'current'; //updating what the new current letter is
  } else currentLetter.className = 'incorrect';
});
