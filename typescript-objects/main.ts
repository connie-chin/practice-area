interface StudentProps {
  // interface starts w caps
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  // ;
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  // ,
  firstName: 'George',
  lastName: 'Chin',
  age: 3,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Behavioral Technician';
console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);
console.log('student:', student);

const vehicle: Vehicle = {
  make: 'toyota',
  model: 'tacoma',
  year: 2024,
};

vehicle['color'] = 'green'; // remember quotes with bracket notation
vehicle['isConvertible'] = false;

console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);

const pet: Pet = {
  name: 'Thumper',
  kind: 'rabbit',
};

delete pet.name; // delete operator
delete pet.kind;

console.log('pet:', pet);
