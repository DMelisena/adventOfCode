const fs=require('fs');
let data = ""


//iniates File{{{
fs.writeFile('passed2.txt', data, (err) => {
    if (err) throw err;
})

fs.writeFile('wrong2.txt', data, (err) => {
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
var num=0
//}}}
