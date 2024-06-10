const heroes: string[] = ['Spiderman', 'Batman', 'Superman', 'Catwoman'];
let randomNumber: number = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex: number = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('randomHero:', randomHero);

interface Book {
  title: string;
  author: string;
}

const library: Book[] = [
  { title: 'Cat in Hat', author: 'Dr. Seuss' },
  { title: 'Giving Tree', author: 'Boy Man' },
  { title: 'Liar Liar', author: 'Penelope Rose' },
];
const lastBook = library.pop(); // removes last element from array. alters original array as well
console.log('pop method on library:', lastBook);
console.log('library after pop:', library);

const firstBook = library.shift();
console.log('shift method, firstBook:', firstBook); // removes first element from an array, alters og array as well
console.log('library after shift n pop:', library);

const js: Book = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: Book = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js); // this will add js to the end of library array
console.log('after pushing js into library:', library);
library.unshift(css); // modifies array by adding to the front of it. now css should be first
console.log('after unshifting css, library:', library);
library.splice(1, 1); // removes index 1,
console.log('library:', library); // only first and last books are left

const fullName: string = 'Connie Chin';
const firstAndLastName: string[] = fullName.split(' ');
console.log('using split to make an array:', firstAndLastName);

interface Employee {
  name: string;
  age: number;
  position: string;
}
const employee: Employee = {
  name: 'Nara',
  age: 26,
  position: 'lead cook',
};
const employeeKeys: string[] = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);

const employeeValues: any = Object.values(employee);
console.log('employeeValues:', employeeValues);

const employeePairs: any = Object.entries(employee);
console.log('employeePairs:', employeePairs);
