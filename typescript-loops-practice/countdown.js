/* exported countdown */
function countdown(number) {
  var newArr = [];
  var currentNum = number;
  while (currentNum >= 0) {
    newArr.push(currentNum);
    currentNum--;
  }
  return newArr;
}
