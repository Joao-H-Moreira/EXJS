
let numeros = [10, 20, 30]

// Definindo uma função que será usada pelo forEach
function exibirNumero(numero) {
  console.log(`O número é: ${numero}`)
}

// Usando o forEach para percorrer o array e chamar a função p/ cada elemento
numeros.forEach(exibirNumero)