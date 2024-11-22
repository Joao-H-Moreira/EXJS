const prompt = require("prompt-sync")();

let nome = prompt(`Digite seu nome`);
let horario = prompt(` È manha, tarde ou noite`)

if(horario == "tarde" || horario == "manha" || horario == "noite"){
   if ( horario == "tarde") {
   console.log(`Boa tarde, ${nome}`)
} else if( horario == "manha") {
    console.log(`Bom dia, ${nome}`)
} else if( horario == "noite") {
    console.log(`Boa noite, ${nome}`)
} } else {
    console.log(`Opção invalida`)
}