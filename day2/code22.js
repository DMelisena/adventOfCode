const fs=require('fs');
let num=0;

function winNote(fileName,array){
  let arrayToString = array.join(' ');
  arrayToString+="\n"
  fs.appendFileSync(fileName, arrayToString, (err) => {
      if (err) throw err;
  })
}

fs.writeFile('failed2.txt', "", (err) => {
    if (err) throw err;
})

fs.writeFile('passed2.txt', "", (err) => {
    if (err) throw err;
})
let newText = fs.readFileSync('failed.txt','utf8')//synchroneusly call
let rawArray = newText.split("\n")
console.log(newText)
rawArray.pop()
let array = []
for (let i=0; i<rawArray.length;i++){
  let line = rawArray[i].split(" ");
  for (let l=0; l<line.length; l++){
    let currentNumber=line[l];
    line[l]=parseInt(line[l]);
  }
   array.push(line)
}

function returnWo(arr, index) {
  let newArr = arr.toSpliced(index, 1);
  return newArr;
}

let positive = true;
let done = false;

for(let i=0;i<array.length;i++){
  done=false;
  for(let l=0; l<array[i].length;l++){
    if (done===true){
      done = false;
      break;
    }
    let removedArray = returnWo(array[i],l)
    if(l===709){
      console.log("removedArray",l,array[i],removedArray)

    }
    let distance = removedArray[1]-removedArray[0]
    if(distance>0){
      positive = true;
    }
    else if(distance<0){
      positive = false;
    }
    else{
      winNote('failed2.txt',array[i]);
      winNote('failed2.txt',removedArray);
      continue;
    }
    for (let j=0; j<removedArray.length-1;j++){
      distance = removedArray[j+1] - removedArray[j];
      if(positive&&distance>0&&distance<4){
      }
      else if(positive===false && distance<0 && distance>-4){
        distance =- distance;
      }
      else{
        //winNote('failed2.txt',array[i]);
        winNote('failed2.txt',array[i],);
        winNote('failed2.txt',removedArray);
        break;
      }

      if(j===removedArray.length-2){
        console.log('finished', i, array[i],l,removedArray,removedArray[j],removedArray[j+1]);
        console.log('f', j,removedArray[j+1],removedArray[j]);
        winNote('passed2.txt', array[i]);
        winNote('passed2.txt', removedArray);
        num++;
        done=true;
        break;
      }
    }
  }
 }

console.log(num)
