
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

module.exports = { countDuplicates };