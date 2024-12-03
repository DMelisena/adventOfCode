const fs = require('fs');
let data = ""

fs.writeFile('passed.txt', data, (err) => {
    if (err) throw err;
})

fs.writeFile('wrong.txt', data, (err) => {
    if (err) throw err;
})

var text = fs.readFileSync('input.txt','utf8')//synchroneusly call
var array = text.split("\n")
var narray = []
array.pop()

var narray = []
var freePass= true;

function passFail(pass,freePass,i,narrayi,l){
  let arrayToString = narray[i].join(' ');
  var wrongString = arrayToString;
  wrongString+="\n";
  fs.appendFile('wrong.txt', wrongString, (err) => {
      if (err) throw err;
  })
  l-=1
}

for (let i=0; i<array.length;i++){
  let line = array[i].split(" ");
  for (let l=0; l<line.length; l++){
    let currentNumber=line[l];
    line[l]=parseInt(line[l]);
  }
  narray.push(line)
}

var length = 0;
var posit = true;
var failPass=true;

var num = 0
for (let i=0; i<narray.length;i++){
  var pass = true;
  var even = false;
  let current = narray[i][0];
  var firstDis=narray[i][0]-narray[i][1];

  if(firstDis<0){
    posit = false;
  }
  else if(firstDis>0){
    posit = true;
  }
  else{
    console.log("even",narray[i]);
    passFail(pass,freePass,i,narray[i]);
    pass=false;
    continue;
  }

  for(let l=0; l<narray[i].length; l++){

    length = narray[i][l]-narray[i][l+1];
  //  console.log(narray[i][l],narray[i][l+1])

    if (posit&&length<0){
      passFail(pass,freePass,i,narray[i],l);
      pass=false;
      break;
    }
    else if (posit===false&&length>0){
      passFail(pass,freePass,i,narray[i],l);
      pass = false;
      break;
    }

    if(length<0){
      let repositive=length;
      length = 0;
      length -= repositive;
   }

    if (length>3||length==0){
      passFail(pass,freePass,i,narray[i],l);
      pass = false;
      break 
    }
  }

  if(pass){
    let arrayToString = narray[i].join(' ');
    arrayToString+="\n"
    num+=1

    fs.appendFile('passed.txt', arrayToString, (err) => {
        if (err) throw err;
    })
  }
}
console.log(array.length)
console.log(num)
