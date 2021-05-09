
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
    var editWordArr = s.split('');
    var count = wordArr.length;

    for(var x= 0; x < count; x++){
        // check forward
        if((x + 1) < count && wordArr[x] == wordArr[x+1]){
            editWordArr.splice(x,2);
            x++;            
        }
    }
    console.log(wordArr, editWordArr);
}

module.exports = { countDuplicates, superReducedString };