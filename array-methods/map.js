'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObject = prices.map(
  (
    price, //creates a new Array, doesnt alter old one.. callback function returns new Array
  ) => ({ price: price, salePrice: price / 2 }),
); // [{price: 42.42, salePrice: 21.21}]
console.log('priceObject:', priceObject);
const formattedPrice = prices.map((price) => `$${price.toFixed(2)}`);
console.log('formattedPrice:', formattedPrice);
const numbersArr = [1, 2, 3, 4, 5];
const newArr = numbersArr.map((num) => num * 2);
console.log('newArr:', newArr);
