const fs=require('fs');

var text = fs.readFileSync('input.txt','utf8')//synchroneusly call
var rawArray = text.split("\n")
console.log(rawArray)
rawArray.pop()
var array = []

//NOTE: change txt to arrays
for (let i=0; i<rawArray.length;i++){
  let line = rawArray[i].split("");
  console.log(line)
  for (let l=0; l<line.length; l++){
    let currentNumber=line[l];
  }
   array.push(line)
}


// console.log("first",array)
//NOTE: show arrays on easier layout
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

console.log("left",leftRight)
console.log("right",rightLeft)

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

console.log("updown",upDown)
console.log("bottomUp",bottomUp)

for (let i=array.length-1;i>=0;i-=1){
  line=''
  let j=i
  // console.log("first",j)
  for(let l=0;l <array[0].length;l++){
    // console.log(j,l,array[j][l]);
    line+=array[j][l];
    // console.log(line)
    j++
    if(j>=array.length){
      negDiagonal.push(line);
      break;
    }
  }
}

negDiagonal.pop()


for (let l=0; l<array[0].length; l++){
  line=''
  let j=l;
  // console.log("first",j)
  for(let i=0; i<array.length; i++){
    line+=array[i][j];
    j++
    if(j>=array.length){
      negDiagonal.push(line);
      break;
    }
  }
}

//NOTE:Positive Diagonal first half
for (let i=0; i<array.length; i++){
  line=''
  let j=i;
  console.log("first",j)
  for (let l=0; l<array[0].length; l++){
    line+=array[j][l];
    j-=1
    if(j<0){
      console.log("line",line)
      posDiagonal.push(line);
      break;
    }
  }
}

console.log("posDiagonal",posDiagonal)
for (let l=0; l<array[0].length; l++){
  line = '';
  let j = l;
  for (let i = array.length-1; i>=0; i-=1){
    line+= array[i][j];
    console.log(j,l,array[j][l])
    j++;
    console.log(j)
    if(j>=array[0].length){
      console.log("line",line)
      posDiagonal.push(line);
      break;
    }
  }
}

console.log("posDiagonal",posDiagonal)

for(let i=0; i<negDiagonal.length; i++){
  line=''
  line = negDiagonal[i].split('').reverse().join('');
  negDiagonalLR.push(line);
}
for(let i=0; i<posDiagonal.length; i++){
  line=''
  line = posDiagonal[i].split('').reverse().join('');
  posDiagonalRL.push(line);
}

// console.log("posDiagonalRL",posDiagonalRL)

let num = 0;

function readXMAS(array){
  let old = num;
  for(let i=0; i<array.length; i++){
    for(let l=0; l<array.length; l++){
      if(array[i][l]=='X' && array[i][l+1]=='M' && array[i][l+2]=='A' && array[i][l+3]=='S'){
        num++
      }
    }
  }
  console.log(old, num)
}



console.log("leftRight",leftRight)
console.log("rightLeft", rightLeft)
console.log("upDown",upDown)
console.log("bottomUp",bottomUp)
console.log("negDiagonal",negDiagonal)
console.log("negDiagonalLR",negDiagonalLR)
console.log("posDiagonal",posDiagonal)
console.log("posDiagonalRL",posDiagonalRL)

readXMAS(leftRight)
readXMAS(rightLeft)
readXMAS(upDown)
readXMAS(bottomUp)
readXMAS(negDiagonal)
readXMAS(negDiagonalLR)
readXMAS(posDiagonalRL)
readXMAS(posDiagonal)

console.log(num)
