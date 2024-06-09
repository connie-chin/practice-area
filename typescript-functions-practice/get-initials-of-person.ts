/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

const getInitialsOfPerson = (person: Person) :string => `${person.firstName[0]}${person.lastName[0]}`;
