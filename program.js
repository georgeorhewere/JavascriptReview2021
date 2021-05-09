let arr = require('./arrays');
let tests = require('./dictionary');

console.log("Hello");

// arr.testArrays();
//testDuplicates();
testSuperReduced();


function testSuperReduced(){
    var word = 'abba';
    tests.superReducedString(word);
    word= 'aaabccddd';
    tests.superReducedString(word);
    word= 'aa';
    tests.superReducedString(word);
    word= 'baab';
    tests.superReducedString(word);
}

function testDuplicates() {
    // test 1
    var word1 = "baabbccdef";
    var result = tests.countDuplicates(word1);
    console.log(word1 + ' has ' + result + ' duplicates');
    // test 2
    word1 = "abcdef";
    result = tests.countDuplicates(word1);
    console.log(word1 + ' has ' + result + ' duplicates');
}