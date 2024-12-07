const prompt = require("prompt-sync")()

// exemplos de funções

function saudacao() {
    console.log("Olá, seja bem-vindo!");
  }
 // chamando a função 

 saudacao()

//  ----------------------------------------


function saudacaoPers(nome) {
    console.log("Olá, " + nome + ", seja bem-vindo!");
  }

  saudacaoPers()

 // ----------------------------------------
 
 function soma(a, b) {
    return a + b; // Retorna a soma de a e b
  }
  let resultado = soma(5, 3); // Armazena o retorno da função na variável resultado
  console.log(resultado); // 8

  
  // ---------------------------------------

 //  Exemplo de arrow function:

 let saudacao = () => {
    console.log("Olá!");
  };
  saudacao(); // Chama a arrow function saudacao


  // --------------------------------------------

// função parametro e retorno

function calculaMedia(nota1,nota2){
  return (nota1 + nota2) / 2 }

  prompt = require("prompt-sync")()
  nota1 = Number(prompt("Digite a nota 1"))
  nota2 = Number(prompt("Digite a nota 2"))

  media = calculaMedia(nota1,nota2)
  console.log("A media do aluno foi", media)