/* exported getStudentNames */
interface Students {
  name: string;
}
function getStudentNames(students: Students[]): string[] {
  const newArr: string[] = [];
  for (let i = 0; i < students.length; i++) {
    newArr.push(students[i].name);
  }
  return newArr;
}
