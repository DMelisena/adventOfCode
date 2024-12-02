const fs = require('fs');

var arr1 = []
var arr2 = []


var text = fs.readFileSync('input.txt','utf8')//synchroneusly call
//console.log (text)
var array = text.split("\n")
//console.log(array)
array.pop()

for (let i=0; i<array.length;i++){
  let line = array[i].split("   ");
  //console.log(line)
  arr1.push(parseInt(line[0]));
  arr2.push(parseInt(line[1]));
}

arr1.sort()
arr2.sort()

let total = 0

//console.log(typeof arr1[0])
//first answer
for (let i=0; i<arr1.length; i++){
  var add = (arr1[i]-arr2[i])
  if (add<0){
    add = 0-add
  }
  total+=add
}

console.log("Answer : Day 1 = ",total)

//second answer
let secondTotal = 0

for (let i=0; i<arr1.length; i++){
  let duplicate = 0
  for(let l=0; l<arr1.length; l++){
    if (arr1[i]==arr2[l]){
      duplicate+=arr1[i]
    }
  }
  secondTotal += duplicate
}

console.log("Answer : Day 2 = ",secondTotal)
