const prompt = require("prompt-sync")();

let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento"));
let anoatual = new Date().getFullYear();
let idade = anoatual - anoNascimento;

console.log(`A sua idade é : ${idade} `)