const fs = require('fs');

var arr1 = []
var arr2 = []


var text = fs.readFileSync('input.txt','utf8')//synchroneusly call
console.log (text)
var array = text.split("\n")
console.log(array)
array.pop()

for (let i=0; i<array.length;i++){
  let word = array[i].split("   ");
  console.log(word)
  arr1.push(word[0]);
  arr2.push(word[1]);
}

arr1.sort()
arr2.sort()


