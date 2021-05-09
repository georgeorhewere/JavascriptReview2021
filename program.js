let arr = require('./arrays');
let tests = require('./dictionary');

console.log("Hello");

// arr.testArrays();
// test 1
var word1 = "baabbccdef";
var result = tests.countDuplicates(word1);
console.log(word1 + ' has ' + result + ' duplicates');
// test 2
word1 = "abcdef";
result = tests.countDuplicates(word1);
console.log(word1 + ' has ' + result + ' duplicates');
