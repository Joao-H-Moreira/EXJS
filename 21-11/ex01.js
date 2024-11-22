const prompt = require("prompt-sync")();
let n1 = parseFloat(prompt(`Digite o primeiro numero:`));
let n2 = parseFloat(prompt(`Digite o segundo numero:`));
let soma = n1 + n2

console.log(`O resultado da soma é ${soma}`)