const prompt = require("prompt-sync")();

let prod = prompt(`Informe o nomo do produto`)
let preco = parseFloat(prompt(`Digite o preço do produto:`));
let quant = parseFloat(prompt(`Digite a quantidade comprada:`));
let valor = preco * quant ;
let imposto = (valor * 0.18) ;
let total = valor + imposto;

console.log(`Produto: ${prod}\n Preço Unitario: R$${preco}\n Quantidade: ${quant}\n Valor sem imposto: R$${valor}\n Imposto: R$${imposto}\n Valor Total: R$${total}     `)


