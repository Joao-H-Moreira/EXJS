//Array de objetos

let pessoas = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
    {
      nome: "Maria",
      idade: 22,
      profissao: "Designer"
    }
  ];
  
  // Acessando os objetos no array
  console.log(pessoas[0].nome); // Ana
  console.log(pessoas[1].idade); // 35
  console.log(pessoas[2].profissao); // Designer

//--------------------
  // Array de arrays


// Exemplo cada filial de uma loja tem 3 vendas estojos, bolsas e canetas 

vendaslojas = [
    [2000, 3000, 4000],
    [400, 500, 1000]
]

console.log("As vendas de bolsas da primeira loja foram" + vendaslojas[0][1])
console.log("As vendas de canetas da primeira loja foram" + vendaslojas[1][2])




//----------------


const empresas = {
    funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
    funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
    funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
  };
  
  // Acessando os objetos dentro do objeto 'empresa'
  console.log(empresas.funcionario1.nome); // Ana
  console.log(empresas.funcionario2.cargo); // Professor
  console.log(empresas.funcionario3.idade); // 22


  //-----------------------------------

  const empresa = {
    nome: "Tech Solutions",
    fundacao: 2010,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Removendo o objeto 'endereco'
  delete empresa.endereco;
  
  console.log(empresa);
  /*
  Saída:
  {
    nome: "Tech Solutions",
    fundacao: 2010
  }
  */

  //----------------------------------

  const pessoa = {
    nome: "João",
    idade: 30
  };
  
  const novoEndereco = {
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  };
  
  // Mesclando o novo objeto 'endereco' no objeto 'pessoa'
  Object.assign(pessoa, novoEndereco);
  
  console.log(pessoa);
  /*
  Saída:
  {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  }
  */