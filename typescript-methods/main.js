var heroes = ['Spiderman', 'Batman', 'Superman', 'Catwoman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
var library = [
  { title: 'Cat in Hat', author: 'Dr. Seuss' },
  { title: 'Giving Tree', author: 'Boy Man' },
  { title: 'Liar Liar', author: 'Penelope Rose' },
];
var lastBook = library.pop(); //removes last element from array. alters original array as well
console.log('pop method on library:', lastBook);
console.log('library after pop:', library);
var firstBook = library.shift();
console.log('shift method, firstBook:', firstBook); //removes first element from an array, alters og array as well
console.log('library after shift n pop:', library);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js); //this will add js to the end of library array
console.log('after pushing js into library:', library);
library.unshift(css); //modifies array by adding to the front of it. now css should be first
console.log('after unshifting css, library:', library);
library.splice(1, 1); //removes index 1,
console.log('library:', library); //only first and last books are left
var fullName = 'Connie Chin';
var firstAndLastName = fullName.split(' ');
console.log('using split to make an array:', firstAndLastName);
var employee = {
  name: 'Nara',
  age: 26,
  position: 'lead cook',
};
var employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
var employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
var employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
