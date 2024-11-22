const prompt = require("prompt-sync")();

let horasT = parseInt(prompt(`Digite as horas trabahadas :`));
let horasR = parseFloat(prompt(`Digite o valor recebido por hora trabahado:`));
let salarioS = horasR * horasT;
let salarioM = (horasR * horasT) * 4;

console.log(`O salario semanal é R$${salarioS} e o salario Mensal é R$${salarioM} `)

