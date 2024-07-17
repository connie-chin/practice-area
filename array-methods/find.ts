interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const users: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const products: Product[] = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];

const user = users.find(({ id }) => id === 2); // returns first element in array that passes the condition
console.log('user:', user);

const expensiveProduct = products.find(({ price }) => price > 900);
console.log('expensiveProduct:', expensiveProduct);

interface Cats {
  name: string;
  age: number;
}

const cats: Cats[] = [
  { name: 'cricket', age: 2 },
  { name: 'fig', age: 4 },
  { name: 'perry', age: 1 },
  { name: 'nari', age: 15 },
];

const oldestCat = cats.find(({ age }) => age > 10);
console.log('oldestCat:', oldestCat?.name);
