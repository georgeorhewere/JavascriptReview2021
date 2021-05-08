function testArrays(){

var a = [12,2,8];
var b = [5,14,7];
//concat
var temp = a.concat(b);
print(temp);
// join
var d = a.join('');
print(d);
//stack operations
//push
var t = a.push(34);
print({type:"After Push",t})
print(a)
var arrPop = a.pop();
print({type:"popped val",arrPop});
print(a)
//end stack operations

// sort numbers
var sortedTemp = a.sort((a,b)=>{ return a - b});
print("sorted")
print(sortedTemp)

// find
var ans =a.find(x=> x==2);
print({type:"find "+ 2,ans})




}

function print(value){
    console.log(value);
}

module.exports ={ testArrays };

