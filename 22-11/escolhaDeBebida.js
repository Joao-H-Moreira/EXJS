const prompt = require("prompt-sync")();

let bebida = Number(prompt(`qual bebida você deseja para água"1", suco"2", refrigerante"3" e café"4"  `));

switch (bebida) {
  case 1:
    console.log( "Aqui está sua Água");
    break;
  case 2:
    console.log("Aqui está seu Suco");
    break;
  case 3:
    console.log("Aqui está seu Refrigerante");
    break;
  case 4:
    console.log("Aqui está seu Café");
    break;
    default:
    console.log("Opção inválida")
}