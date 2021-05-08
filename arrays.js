function testArrays(){

var a = [12,2,8];
var b = [5,14,7];
var temp = a.concat(b);
print(temp);
var d = a.join('');
print(d);
var t = a.push(34);
var sortedTemp = a.sort((a,b)=>{ return a - b});
var ans =a.find(x=> x==2);
print({type:"find",ans})
print(t)
print(a)
print("sorted")
print(sortedTemp)

}

function print(value){
    console.log(value);
}

module.exports ={ testArrays, print };

