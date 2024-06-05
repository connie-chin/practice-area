// create your loops here.
function whileLoop1() {
  let newArr = [];
  let i = 0;
  while (i < 10) {
    newArr.push(i);
    i++;
  }
  return newArr;
}
console.log('hi');
console.log('whileLoop1:', whileLoop1());

function whileLoop2() {
  let newArr = [];
  let i = 0;
  while (i < 20) {
    newArr.push(i);
    i = i + 2;
  }
  return newArr;
}
console.log('whileLoop2:', whileLoop2());

function forLoop1() {
  let newArr = [];
  for (let i = 0; i < 10; i++) {
    newArr.push(i);
  }
  return newArr;
}
console.log('forLoop1:', forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}
console.log(forLoop2());

function forInLoop1(object) {
  let newArr = [];
  for (const prop in object) {
    newArr.push(prop);
  }
  return newArr;
}
const object = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('forInLoop1:', forInLoop1(object));

function forInLoop2(object) {
  let newArr = [];
  for (const prop in object) {
    newArr.push(object[prop]);
  }
  return newArr;
}
console.log('forInLoop2:', forInLoop2(object));
