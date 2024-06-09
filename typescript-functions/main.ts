function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));
console.log(convertMinutesToSeconds(10));

function greet(name: string): string {
  return 'Hey ' + name + '!';
}
console.log(greet('Beavis'));
console.log(greet('SpongeBob'));

// let getArea = (width: number, height: number) => width * height;
const getArea: any = (width: number, height: number): number => {
  return width * height;
};
console.log(getArea(17, 42));
console.log(getArea(22, 38));

interface FullName {
  firstName: string;
  lastName: string;
}
const getFirstName: any = (person: FullName): string => person.firstName;
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getFirstName({ firstName: 'John', lastName: 'Henry' }));

const getLastName: any = (person: FullName): string => person.lastName;
console.log(getLastName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getLastName({ firstName: 'John', lastName: 'Henry' }));

const getLastElement: any = (array: any[]): any => array[array.length - 1];
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
console.log(getLastElement([true, true, false, true]));

const callOtherFunction: any = (otherFunction: any, params: unknown): any =>
  otherFunction(params);
// function callOtherFunction (otherFunction:any, params: unknown) : any {
//   return otherFunction(params);}

console.log(callOtherFunction(convertMinutesToSeconds, 10));
console.log(callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']));
console.log(
  callOtherFunction(getLastName, { firstName: 'John', lastName: 'Henry' }),
);
