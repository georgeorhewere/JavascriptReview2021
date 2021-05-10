
function countDuplicates(word)
{    
    var characterInstances =Object.create({});
    var wordArray = word.split('');
    var duplicates = 0;
    
    wordArray.forEach(element => {        

        if(characterInstances[element] != null)
        {            
            duplicates++;
        }else{
            characterInstances[element] = 0;
        }
    });

    // would break if no duplicates exists and requires the addition of a if statement
    // would be useful is count has some relationship with the character

    // var totalDuplicates =  Object.values(characterInstances).filter(x => x > 0)
    //                                                      .reduce((t,c) =>{                                                             
    //                                                          return t += c
    //                                                      });
    
    return duplicates;
}

function sumDuplicates(total,value){
    return total += value;
}

function superReducedString(s) {
    // Write your code here    
    var wordArr = s.split('');
    console.log("word length " + wordArr.length)
    for(var x= 0; x < wordArr.length; x++){
        // need to confirm if this would work in c#
        // editing an array while iterating would not be good practice
        // check forward
        
        if((x + 1) < wordArr.length && wordArr[x] == wordArr[x+1]){
            wordArr.splice(x,2);            
            x--;            
        }
        // check backward
        if((x-1) >= 0 && wordArr[x-1] == wordArr[x]){            
            wordArr.splice(x-1,2);
            // x--;
        }
    }

    var result = wordArr.length > 0 ? wordArr.reduce((x,y)=> {return x += y }) : 'Empty String';
    console.log(wordArr, result);
    
}

function superReducedString2(s) {
    // Write your code here
    var wordArr = s.split('');
    var index = 0;
    while(index < wordArr.length)
    {
        if(index + 1 < wordArr.length && wordArr[index] == wordArr[index + 1])
        {
            wordArr.splice(index,2);
            index--;
        }else
        {
            index++;
        }
    }
    var result = wordArr.length > 0 ? wordArr.reduce((x,y)=> {return x += y }) : 'Empty String';
    console.log("final result", result, wordArr);

}

function palindromeChainLength(n){

    // get palindrome of n 
    var numOfSteps = 0;
    var reverseNumber = reverseNum(n);
    
    if(n == reverseNumber){
        return numOfSteps
    }
    else
    {
        while(n != reverseNumber){
            n += reverseNumber;
            reverseNumber = reverseNum(n);
            numOfSteps++;
        }
    }

    console.log(numOfSteps, n, reverseNumber);
} 

function reverseNum(n)
{
    var numArr = n.toString().split('')
    return +numArr.reduceRight((x,t)=>{ return  x +=t; });
}

function stayPositive(arr){
    var startValue = 1;
    arr.unshift(startValue);
    var minStart = arr.reduce((x,t)=>{
        var temp = x + t;
        if(temp <= 0){
            var addNumber = Math.abs(temp) + 1;
            startValue += addNumber;
            temp += addNumber;
        }
        return temp;
    });

    console.log("minimum start " + startValue);
}

module.exports = { countDuplicates, superReducedString, superReducedString2, palindromeChainLength, stayPositive };
