let arr = require('./arrays');
let tests = require('./dictionary');

console.log("Hello");

// arr.testArrays();
// test 1
var word1 = "baabbccdef";
tests.countDuplicates(word1);
// test 2
word1 = "abcdef";
tests.countDuplicates(word1);
