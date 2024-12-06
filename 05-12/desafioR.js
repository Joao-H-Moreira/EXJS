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

  
pessoas.forEach(pessoas => {
Object.keys(pessoa).forEach(chave =>{
    console.log(`${chave} : ${pessoa[chave]}`)
    })
})
  