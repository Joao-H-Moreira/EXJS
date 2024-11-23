const prompt = require("prompt-sync")();

let cor = prompt(`Escolha uma das cores a seguir para traduzir red , blue ou green`);

switch (cor) {
    case "red":
      console.log( `A cor é vermelho`);
      break;
    case "blue":
      console.log( `A cor é azul`);
      break;
    case "green":
      console.log( `A cor é verde`);
      break;
      default:
      console.log("Opção inválida")
  }
