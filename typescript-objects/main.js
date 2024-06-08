var student = {
  firstName: 'George',
  lastName: 'Chin',
  age: 3,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Behavioral Technician';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);
console.log('student:', student);
var vehicle = {
  make: 'toyota',
  model: 'tacoma',
  year: 2024,
};
vehicle['color'] = 'green'; //remember quotes with bracket notation
vehicle['isConvertible'] = false;
console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);
var pet = {
  name: 'Thumper',
  kind: 'rabbit',
};
delete pet.name; //delete operator
delete pet.kind;
console.log('pet:', pet);
