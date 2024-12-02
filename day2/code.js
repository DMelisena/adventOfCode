const fs = require('fs');

let data = ""

// Write data in 'Hello.txt' .
fs.writeFile('passed.txt', data, (err) => {
    // In case of a error throw err.
    if (err) throw err;
})

fs.writeFile('wrong.txt', data, (err) => {
    // In case of a error throw err.
    if (err) throw err;
})

var text = fs.readFileSync('input.txt','utf8')//synchroneusly call
//console.log (text)
var array = text.split("\n")
var narray = []
//console.log(array)
array.pop()

// console.log(array)
var narray = []

for (let i=0; i<array.length;i++){
  let line = array[i].split(" ");
  for (let l=0; l<line.length; l++){
    let currentNumber=line[l];
  //  console.log(currentNumber)
    line[l]=parseInt(line[l]);
  }
  // console.log(line)
  narray.push(line)
}

//console.log(narray)

var length = 0
var posit = true

var num = 0
//console.log("num",num)
for (let i=0; i<narray.length;i++){
  var pass = true;
  var even = false;
  let current = narray[i][0]
  var firstDis=narray[i][0]-narray[i][1]

  if(firstDis<0){
    posit = false 
  }
  else if(firstDis>0){
    posit = true
  }
  else{
    console.log("even",narray[i])
    pass=false
    continue;
  }
  // console.log(posit,narray[i])

  for(let l=0; l<narray[i].length; l++){

    length = narray[i][l]-narray[i][l+1]
  //  console.log(narray[i][l],narray[i][l+1])

    if (posit&&length<0){
      console.log("- on +")
      console.log("fall",narray[i],narray[i][l],narray[i][l+1],length)
      let arrayToString = narray[i].join(' ');
      var wrongString = arrayToString
      wrongString+="\n"
      wrongString+="- on +"
      wrongString+="  "
      wrongString+=narray[i][l]
      wrongString+="  "
      wrongString+=narray[i][l+1]
      wrongString+="  "
      wrongString+=length
      wrongString+="\n"
      fs.appendFile('wrong.txt', wrongString, (err) => {
          // In case of a error throw err.
          if (err) throw err;
      })
      pass = false;
      break;
    }
    else if (posit===false&&length>0){
      console.log("+ on -")
      console.log("fall",narray[i],narray[i][l],narray[i][l+1],length)
      let arrayToString = narray[i].join(' ');
      var wrongString = arrayToString
      wrongString+="\n"
      wrongString+="+ on -"
      wrongString+="  "
      wrongString+=narray[i][l]
      wrongString+="  "
      wrongString+=narray[i][l+1]
      wrongString+="  "
      wrongString+=length
      wrongString+="\n"
      fs.appendFile('wrong.txt', wrongString, (err) => {
          // In case of a error throw err.
          if (err) throw err;
      })
      pass = false;
      break;
    }

    if(length<0){
      let repositive=length;
      length = 0;
      length -= repositive;
   }

    if (length>3||length==0){
      console.log(">3 / 0")
      console.log("fall",narray[i],narray[i][l],narray[i][l+1],length)
      let arrayToString = narray[i].join(' ');
      var wrongString = arrayToString
      wrongString+="  "
      wrongString+=narray[i][l]
      wrongString+="  "
      wrongString+=narray[i][l+1]
      wrongString+="  "
      wrongString+=length
      wrongString+="\n"
      fs.appendFile('wrong.txt', wrongString, (err) => {
          // In case of a error throw err.
          if (err) throw err;
      })
      l=narray.length
      pass = false;
      break 
    }
  }
  if(pass){
    //console.log("survivor",narray[i])
    let arrayToString = narray[i].join(' ');
    //console.log("survivor",arrayToString)
    arrayToString+="\n"
    // Data which will be appended to the file.
    num+=1

    // Append data to 'Hello.txt' .
    fs.appendFile('passed.txt', arrayToString, (err) => {
        // In case of a error throw err.
        if (err) throw err;
    })
  }
}
console.log(array.length)
console.log(num)
