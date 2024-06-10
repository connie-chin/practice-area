/* exported addSuffixToAll */
var addSuffixToAll = function (words, suffix) {
  var newArr = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = ''.concat(words[i] + suffix);
    newArr.push(newWord);
  }
  return newArr;
};
