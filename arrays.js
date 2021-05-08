function testArrays(){

var a = [12,2,8];
var b = [5,14,7];
//concat
var temp = a.concat(b);
// print(temp);
// join
var d = a.join('');
// print(d);
//stack operations
//push
var t = a.push(34);
// print({type:"After Push",t})
// print(a)
var arrPop = a.pop();
// print({type:"popped val",arrPop});
// print(a)
//end stack operations

// sort numbers
var sortedTemp = a.sort((a,b)=>{ return a - b});
// print("sorted")
// print(sortedTemp)

// find
var ans =a.find(x=> x==2);
// print({type:"find "+ 2,ans})

// aggregator function .. operates on all items in the array
var res = a.reduce((t,x) =>{ return t+=x } );
//recursion
var res2 = factorial(5);
 // print(res2);
// 
var word1 = "stressredse";
var stringArr = word1.split('');
print(stringArr);

// Mutators

//Add items
// unshift -- adds to the top of the array
b.unshift(43,56,24);
print(b);
//push-- adds to the bottom of the array
b.push(76);
print(b);

// Remove items
// pop -- remove from the end of the array
var t = b.pop();
print(b);
// shift -- remove from the top of the array
var d = b.shift();
print(b);




}

function factorial(num){
    if(num <=1)
        return 1;
    return num * factorial(num -1);
}

function print(value){
    console.log(value);
}

module.exports ={ testArrays };

