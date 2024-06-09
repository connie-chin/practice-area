/* exported getFirstInitialOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

const getFirstInitialOfPerson = (person: Person) :string => {return person.firstName[0];}
