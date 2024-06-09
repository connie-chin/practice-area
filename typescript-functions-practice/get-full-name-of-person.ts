/* exported getFullNameOfPerson */
interface FullName {
  firstName: string;
  lastName: string;
}
function getFullNameOfPerson(person: FullName) : string {
  return `${person.firstName} ${person.lastName}`;
}
