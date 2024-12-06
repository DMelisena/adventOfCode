const fs=require('fs');
let data = ""

//iniates File{{{
fs.writeFile('passed2.txt', data, (err) => {
    if (err) throw err;
})

fs.writeFile('wrong2.txt', data, (err) => {
    if (err) throw err;
})

fs.writeFile('failed.txt', data, (err) => {
    if (err) throw err;
})
// }}}

//write on file{{{
function winNote(fileName,array){
  let arrayToString = array.join(' ');
  arrayToString+="\n"
  fs.appendFile(fileName, arrayToString, (err) => {
      if (err) throw err;
  })
}
//}}}

//Turn Docs into array{{{
var text = fs.readFileSync('input.txt','utf8')//synchroneusly call
var rawArray = text.split("\n")
rawArray.pop()
var array = []
for (let i=0; i<rawArray.length;i++){
  let line = rawArray[i].split(" ");
  for (let l=0; l<line.length; l++){
    let currentNumber=line[l];
    line[l]=parseInt(line[l]);
  }
   array.push(line)
}
//}}}

//initial parameter{{{
let num = 0;
let freePass = true;

//}}}


//NOTE: How to create freepass so that when it's activated, it would turn false
//But when it's false it if it's wrong again it skipped, but if it's right it ended up passing
//FIX: it's looping inside of even distance on first 2 number
//
let positive = true;
for (let i = 0; i<array.length; i++){
  // console.log(array[i]);
  let distance=array[i][1]-array[i][0]
  // console.log("freepass",freePass)
  if(distance>0){
    positive = true;
  }
  else if(distance<0){
    positive = false;
  }
  else{
    winNote('failed.txt',array[i]);
    continue;
  }
  // console.log(positive,distance,array[i][0],array[i][1],array[i],array[i].length)

  for (let l=0; l<array[i].length-1;l++){
    distance=array[i][l+1]-array[i][l];
    // console.log(positive,distance,array[i])
    if(positive&&distance>0&&distance<4){
    }
    else if(positive===false&&distance<0&&distance>-4){
      distance =-distance;
    }
    else{
      freePass = true;
      winNote('failed.txt',array[i]);
      break;
    }

    if(l===array[i].length-2){
      console.log('finished',i,array[i],l);
      winNote('passed2.txt',array[i]);
      num++;
      // console.log("freepass turned true");
      // console.log("retruefree",freePass)
    }
  }
}

console.log(num)

