// Percorrendo Objetos

let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };
  for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }

//--------------------
// exemplo completo de criação e manipulação de um objeto.

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function() {
      return `O carro ${this.marca} ${this.modelo} está ligado.`;
    }
  };
  
  console.log(carro.ligar()); // "O carro Toyota Corolla está ligado."
  carro.ano = 2021; // Atualizando o ano
  console.log(carro.ano); // 2021