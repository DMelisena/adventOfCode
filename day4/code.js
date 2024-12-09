const fs=require('fs');

var text = fs.readFileSync('dummy.txt','utf8')//synchroneusly call
var rawArray = text.split("\n")
console.log(rawArray)
rawArray.pop()
var array = []

for (let i=0; i<rawArray.length;i++){
  let line = rawArray[i].split("");
  console.log(line)
  for (let l=0; l<line.length; l++){
    let currentNumber=line[l];
  }
   array.push(line)
}
for (let i=0; i<array.length;i++){
  console.log(array)
}
console.log(array.length)
console.log(array[0].length)

let leftRight=[]
let rightLeft=[]
let upDown=[]
let bottomUp=[]

let posDiagonal=[]
let posDiagonalRL=[]
let negDiagonal=[]
let negDiagonalLR=[]

let line=''

for(let i=0; i<array.length; i++){
  line=''
  for(let l=array[0].length-1; l>=0; l-=1){
    line+=array[i][l];
  }
  rightLeft.push(line)
}

for(let i=0; i<array.length; i++){
  line=''
  for(let l=0; l<array[0].length; l++){
    line+=array[i][l];
  }
  leftRight.push(line)
}

console.log(leftRight)
console.log(rightLeft)

for(let i=0; i<array.length; i++){
  line=''
  for(let l=0; l<array[i].length; l++){
    line+=array[l][i];
  }
  upDown.push(line)
}

for(let i=0; i<array.length; i++){
  line=''
  for(let l=array.length-1; l>=0; l-=1){
    line+=array[l][i];
  }
  bottomUp.push(line)
}

console.log(upDown)
console.log(bottomUp)
