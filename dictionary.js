
function countDuplicates(word){
    var characterInstances = new Array();
    var wordArray = word.split('');
    
    wordArray.forEach(element => {
        console.log(characterInstances[element]);
        if(characterInstances[element]){
            console.log("increase count "+ element );
            characterInstances[element]++;
        }else{
            characterInstances[element] = 0;
        }
    });

    console.log(wordArray, characterInstances);


}

module.exports = { countDuplicates };