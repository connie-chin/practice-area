/* exported sumAll */
var sumAll = function (numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
