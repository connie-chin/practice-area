function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));
console.log(convertMinutesToSeconds(10));
function greet(name) {
  return 'Hey ' + name + '!';
}
console.log(greet('Beavis'));
console.log(greet('SpongeBob'));
// let getArea = (width: number, height: number) => width * height;
var getArea = function (width, height) {
  return width * height;
};
console.log(getArea(17, 42));
console.log(getArea(22, 38));
var getFirstName = function (person) {
  return person.firstName;
};
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getFirstName({ firstName: 'John', lastName: 'Henry' }));
var getLastName = function (person) {
  return person.lastName;
};
console.log(getLastName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getLastName({ firstName: 'John', lastName: 'Henry' }));
var getLastElement = function (array) {
  return array[array.length - 1];
};
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
console.log(getLastElement([true, true, false, true]));
var callOtherFunction = function (otherFunction, params) {
  return otherFunction(params);
};
// function callOtherFunction (otherFunction:any, params: unknown) : any {
//   return otherFunction(params);}
console.log(callOtherFunction(convertMinutesToSeconds, 10));
console.log(callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']));
console.log(
  callOtherFunction(getLastName, { firstName: 'John', lastName: 'Henry' }),
);
