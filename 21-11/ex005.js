let prompt = require("prompt-sync")()


let nome = prompt("Digite seu nome:")
let hora = prompt("É manha, tarde ou noite?")

if (  hora != "tarde"  && hora != "manha" && hora !="noite")
    { console.log("OPCAO INVALIDA")}
else if (hora == "manha") 
    { console.log("Bom dia, " + nome)}
else if(hora == "tarde")
    { console.log("Boa tarde, " + nome)}
else if(hora == "noite")
    { console.log("Boa noite, " + nome)}