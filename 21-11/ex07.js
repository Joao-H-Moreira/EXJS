const prompt = require("prompt-sync")();

let preco = parseFloat(prompt(`Digite o valor total:`));
let parcela = parseInt(prompt(`Digite a quantidade de parcelas:`));

if(parcela > 0 ){
    let valorParcela = preco / parcela
    console.log(`Valor total: R$${preco}\n Quantide de Parcelas: ${parcela}\n Valor das parcelas: R$${valorParcela} `)
} else {
    console.log(`Valor de parcelas Invalida`)
}
