// Chaves 

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const chaves = Object.keys(person);
console.log(chaves); // ['name', 'age', 'city']

chaves.forEach(key => {console.log(key)})

// -----------------------------------------------------
// Valores

const person1 = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const valor = Object.values(person1);
console.log(valor); // ['John', 30, 'New York']

// ---------------------------------------------------
// Adicionando informação


person1.email = "joao@email.com";
console.log(person1); // { nome: 'João', idade: 30, email: 'joao@email.com' }

// --------------------------------------------------
// Objetos Aninhados


let aluno = {
    nome: "Maria",
    idade: 22,
    endereco: {
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  console.log(aluno.endereco.cidade); // "São Paulo"

//------------------------------------------------
//Verificando Propriedades

let pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  };
  console.log("nome" in pessoa); // true
  console.log("sobrenome" in pessoa); // false

//--------------------------------------------
// Outra maneira de verificar se uma propriedade pertence a um objeto é usando o método 

console.log(pessoa.hasOwnProperty("idade")); // true
