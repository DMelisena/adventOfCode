const fs=require('fs');

let newText = fs.readFileSync('input.txt','utf8')//synchroneusly call
// let newText="mul(54,3))"
let rawArray = newText.split("")
// console.log(rawArray)
// console.log(newText)
rawArray.pop()
let array = []
for (let i=0; i<rawArray.length;i++){
  let line = rawArray[i].split("");
   array.push(line)
}

// console.log(array)
let inputs = [];
let enable = true;
for (let i=0; i<array.length;i++){
  // console.log(array[i])
  let string=''
  let newInputs=[]
  let firstInput=false;

  if(array[i]=='m'&&enable){
    if(array[i+1]=='u'){
      if(array[i+2]=='l'){
        if(array[i+3]=='('){
          for(let l=i+4; l<i+4+8;l++){
            // console.log(array[l])
            if(array[l]==','&&firstInput==false){
              newInputs.push(Number(string))
              firstInput=true;
              string=''
            }
            else if(firstInput===true&&array[l]==')'){
              newInputs.push(parseInt(string))
              if(newInputs[0]>0&&newInputs[1]>0){
              inputs.push(newInputs)
              console.log(array[i+4],array[i+5],array[i+6],array[i+7],array[i+8],array[i+9],array[i+10],array[i+11])
              break;
              }
            }
            else if(isNaN(array[l])){
              break
            }
            else{
              string+=array[l]
            }
            if(string.length>3){
              break;
              console.log("string longer than 3 digits")
            }
          }
        }
      }
    }
  }
  else if(array[i]=='d'&&array[i+1]=='o'){
    for(let l=i; l<i+5; l++){
      string+=array[l]
    }
    if(array[i+2]=='('&&array[i+3]==')'){
      enable=true;
      console.log("\nDODODOODOOD",string)
    }
    else if(array[i+2]=='n'&&array[i+3]=="'"&&array[i+4]=='t'&&array[i+5]=='('&&array[i+6]==')'){
      enable=false;
      console.log("\nDONT DONT DONT",string)
    }
  }
}

let num=0
for (let i = 0;i<inputs.length;i++){
  if(i===744){
    // console.log(inputs[i])
  }
  else{
    // console.log('inputs',i,inputs[i][0],inputs[i][1],inputs[i][0]*inputs[i][1])
  }
  num+=(inputs[i][0]*inputs[i][1])
}
console.log(inputs.length)
console.log(num)
