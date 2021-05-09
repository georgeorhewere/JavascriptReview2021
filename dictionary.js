
function countDuplicates(word){
    
    var characterInstances =Object.create({});
    var wordArray = word.split('');
    
    wordArray.forEach(element => {        

        if(characterInstances[element] != null)
        {            
            characterInstances[element]++;
        }else{
            characterInstances[element] = 0;
        }
    });

    var totalDuplicates =  Object.values(characterInstances).filter(x => x > 0)
                                                         .reduce((t,c) =>{                                                             
                                                             return t += c
                                                         });
    
    console.log("total : "+ totalDuplicates);


}

function sumDuplicates(total,value){
    return total += value;
}

module.exports = { countDuplicates };