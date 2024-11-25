const prompt = require("prompt-sync")();

let evento = Number(prompt(`Escolha um dos eventos a seguir Workshop"1", Palestra"2" ou Hackathon"3".  `));

switch (evento) {
    case 1:
      let part = Number(prompt(`Digite a quantidade de participantes`));
      let total1 = part * 50;
      console.log( `Evento escolhido: Workshop\n Quantidade de Participantes:${part}\n Custo total: R$${total1}  `);
      break;
    case 2:
    let hr = Number(prompt(`Digite a quantidade de horas de palestra`));
    let total2 = hr * 100;
    console.log( `Evento escolhido: Workshop\n Quantidade de Horas:${hr}\n Custo total: R$${total2}  `);
    break;
    case 3:
    let equip = Number(prompt(`Digite a quantidade de equipes`));
    let day = Number(prompt(`Digite a quantidade de dias`));
    let total3 = (equip * 500) * day;    
    console.log( `Evento escolhido: Workshop\n Quantidade de Equipes:${equip}\n Quantidade de Dias:${day}\n  Custo total: R$${total3}  `);
    break;
    default:
    console.log("Opção inválida")
  }
