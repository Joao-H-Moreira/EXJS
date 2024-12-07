prompt = require("prompt-sync")();

function calcula(produto, preco, imposto){
  return (preco * (imposto /100) ) + preco   
};



produto = prompt("Digite o nome do produto: ")
preco = Number(prompt("Digite o preço: "))
imposto = Number(prompt("Digite o imposto em %: "))

let total = calcula(produto, preco, imposto)
console.log(`O produto escolhido foi ${produto} e o preço final é ${total}`)