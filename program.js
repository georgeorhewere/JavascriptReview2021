let arr = require('./arrays');
let tests = require('./dictionary');

console.log("Hello");

// arr.testArrays();
//testDuplicates();
// testSuperReduced();

// testStayPositive();
testPalindromeCheck();

function testPalindromeCheck(){
    
    var n =87;
    var results = tests.palindromeChainLength(n);
    console.log("number of steps to make "+ n +" a palindrome is " + results)
    n =77;
    var results = tests.palindromeChainLength(n);
    console.log("number of steps to make "+ n +" a palindrome is " + results)

}

function testStayPositive(){
    var arr = [ -4, 3,2,1]
    tests.stayPositive(arr);

    arr = [ 3, -6, 5, -2, 1]
    tests.stayPositive(arr);

    arr = [-5,4,-2,3,1,-1,-6,-1,0,5]
    tests.stayPositive(arr);

}


function testSuperReduced(){
    var word = 'abba';
    tests.superReducedString2(word);
    word= 'aaabccddd';
    tests.superReducedString2(word);
    word= 'aa';
    tests.superReducedString2(word);
    word= 'baab';
    tests.superReducedString2(word);
    word ='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    tests.superReducedString2(word);
    word='lrfkqyuqfjjfquyqkfrlkxyqvnrtyssytrnvqyxkfrzrmzlygffgylzmrzrfveulqfpdbhhbdpfqluevlqdqrrcrwddwrcrrqdql'
    tests.superReducedString2(word);


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