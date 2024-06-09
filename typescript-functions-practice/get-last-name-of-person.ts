/* exported getLastNameOfPerson */

interface FullName {
  firstName: string;
  lastName: string;
}
const getLastNameOfPerson = (person: FullName) : string => {return person['lastName'];}
