const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt(`Digite o primeiro numero:`));
let n2 = parseFloat(prompt(`Digite o segundo numero:`));

if( n1 >= n2){
  diferenca =  n1 - n2
  console.log(`A diferença é ${diferenca}`)
} else{  
    diferenca =  n2 - n1
    console.log(`A diferença é ${diferenca}`)
}
