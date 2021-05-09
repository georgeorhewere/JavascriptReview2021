
function countDuplicates(word){
    var characterInstances = new Array();
    var wordArray = word.split('');
    
    wordArray.forEach(element => {        

        if(characterInstances[element] != null)
        {            
            characterInstances[element]++;
        }else{
            characterInstances[element] = 0;
        }
    });

    

    console.log(wordArray, characterInstances);


}

module.exports = { countDuplicates };