const prompt = require("prompt-sync")();

let valorTotal = parseFloat(prompt(`Digite o valor total:`));
let qdParcela = parseInt(prompt(`Digite a quantidade de parcelas:`));
let jurosM = parseInt(prompt(`Digite a taxa de juros Mensais (em %):`))/100;

if(qdParcela > 0 ){
    let valorJuros = valorTotal * (1 + jurosM* qdParcela);
    let valorParcela = valorJuros / qdParcela
    console.log(`O valor final com juros é R$${valorJuros.toFixed(2)} e o valor das parcelas é de R$${valorParcela.toFixed(2)}`)
} else {
    console.log(`Quantidade de parcelas incorreta`)
}
