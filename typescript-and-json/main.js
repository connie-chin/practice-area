'use strict';
const bookArr = [
  { isbn: 'abc123', title: 'Cat in Hat', author: 'Dr. Seuss' },
  { isbn: 'def456', title: 'When Harry met Sally', author: 'Tom Hanks' },
  { isbn: 'ghi789', title: 'She is the Man', author: 'Amanda Bynes' },
];
console.log('bookArr:', bookArr);
console.log('typeof bookArr:', typeof bookArr);
console.log('JSON stringify bookArr:', JSON.stringify(bookArr)); //turns JavaScript value to JSON string
console.log('JSON stringify bookArr typeof:', typeof JSON.stringify(bookArr));
const student = '{"numberId":"012", "String Name":"George Kind"}'; //string we want to turn into JSON object
console.log('student:', student); //just remember this format for JSON^^
console.log('typeof student:', typeof student);
const newObj = JSON.parse(student); //created a JSON object from our string
console.log('newObj:', newObj);
console.log('typeof newObj:', typeof newObj);
