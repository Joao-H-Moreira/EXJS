const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Digite o primeiro numero"))
let n2 = parseFloat(prompt("Digite o segundo numero"))
let operacao = Number(prompt(`qual bebida você deseja para Soma"1", Subtração"2", Multiplicação"3" e Divisão"4"  `));

switch (operacao) {
  case 1:
    let res1 = n1 + n2;
    console.log( `O resultado é ${res1}`);
    break;
  case 2:
    let res2 = n1 - n2;
    console.log( `O resultado é ${res2}`);
    break;
  case 3:
    let res3 = n1 * n2;
    console.log( `O resultado é ${res3}`);
    break;
  case 4:
    let res4 = n1 / n2;
    console.log( `O resultado é ${res4}`);
    break;
    default:
    console.log("Opção inválida")
}