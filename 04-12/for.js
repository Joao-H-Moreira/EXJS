//Exemplo 1
let fruta = ["Maça", "Banana","Laranja", "Melancia", "Uva"];

for (let i = 0 ; i <=6; i++) { // são 3 parametros: inicio ( let i = 0 ;), condição ( i <=6;) e incremento ( i++) 
console.log(`Numero: ${i}`)
}

let frutas = ["Maça", "Banana","Laranja", "Melancia", "Uva"];

for (let i = 0 ; i < frutas.lenght; i++) { 
    console.log(`Elemento no indice ${i}: ${frutas}`)
}



let valores = [2, 4, 6, 8];
for (let i = 0; i < valores.length; i++) {
  valores[i] *= 2; // Multiplica cada valor por 2
}
console.log("Array modificado:", valores);


let numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; // Adiciona o número atual à variável 'soma'
}
console.log("A soma dos números é:", soma);

// forçando loop infinito com condição que nunca vai mudar
for (let i = 0; 1 == 1; i++){
    console.log(`${i}`)
}
// pressionar CTRL + C no terminal para encerrar 

