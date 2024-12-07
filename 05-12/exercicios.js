// exercicio 1

let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
  };
 

  console.log(livro.titulo + livro.autor); 


  // exercicio 2

  let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020
  };

carro.ano = 2022
carro.cor = "Prata"

console.log(carro)


// exercicio 3

let pessoa = {
    nome: "Carlos",
    idade: 28
    cumprimento: function(){
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} `
}

console.log(pessoa.cumprimento()) 
