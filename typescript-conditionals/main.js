'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const isUnderFive = (number) => {
  if (number < 5) return true;
  else return false;
};
console.log(isUnderFive(4));
console.log(isUnderFive(10));
console.log(isUnderFive(5));
const isEven = (number) => {
  if (number % 2 === 0) return true;
  else return false;
};
console.log(isEven(5));
console.log(isEven(10));
console.log(isEven(4));
function startsWithJ(string) {
  if (string[0] === 'J') return true;
  else return false;
}
console.log(startsWithJ('JavaScript'));
console.log(startsWithJ('PHP'));
const isOldEnoughToDrink = (person) => {
  if (person.age >= 21) return true;
  else return false;
};
const bart = {
  name: 'Bartholomew Jojo Simpson',
  age: 10,
};
console.log(isOldEnoughToDrink(bart));
function categorizeAcidity(pH) {
  if (pH > 0 && pH < 7) return 'acid';
  else if (pH === 7) return 'neutral';
  else if (pH > 7 && pH <= 14) return 'base';
  else return 'invalid pH level';
}
console.log(categorizeAcidity(-1)); //dont need console.logs w returns?
console.log(categorizeAcidity(14.0000001));
console.log(categorizeAcidity(7));
console.log(categorizeAcidity(2));
console.log(categorizeAcidity(9));
function introduceWarnerBro(name) {
  // if (name === 'yakko' || name === 'wakko') return "We're the warner bros!"; //need to attach name to both sides
  // else if (name === 'dot') return "I'm cute~";
  // else return 'GN everyone!';
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the Warner Bros");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('GN everyone');
  }
}
introduceWarnerBro('yakko');
introduceWarnerBro('wakko');
introduceWarnerBro('cody');
introduceWarnerBro('dot');
const recommendMovie = (genre) => {
  switch (genre) {
    case 'action':
      console.log('Die Hard');
      break;
    case 'comedy':
      console.log('How to lose a guy in 10 days');
      break;
    case 'horror':
      console.log('Grudge');
      break;
    case 'drama':
      console.log('Pearl Harbor');
      break;
    default:
      console.log('Genre not recognized.');
  }
};
recommendMovie('action');
recommendMovie('comedy');
recommendMovie('random');
