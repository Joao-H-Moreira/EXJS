const prompt = require("prompt-sync")();

let prod = prompt(`Informe o nomo do produto`)
let preco = parseFloat(prompt(`Digite o preço do produto:`));
let percent = parseFloat(prompt(`Digite a porcentagem do desconto:`));

let desconto = (preco * percent) /100
let total = preco - desconto

console.log(`Produto: ${prod}\n Preço: R$${preco}\n Desconto: R$${desconto} Valor Final: R$${total} `)