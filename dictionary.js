
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
    for(var x= 0; x < wordArr.length; x++){
        // need to confirm if this would work in c#
        // editing an array while iterating would not be good practice
        // check forward
        if((x + 1) < wordArr.length && wordArr[x] == wordArr[x+1]){
            wordArr.splice(x,2);
            //x++;            
        }
        // check backward
        if((x-1) >= 0 && wordArr[x-1] == wordArr[x]){            
            wordArr.splice(x-1,2);
        }
    }

    var result = wordArr.length > 0 ? wordArr.reduce((x,y)=> {return x += y }) : 'Empty String';
    console.log(wordArr, result);
    
}

module.exports = { countDuplicates, superReducedString };