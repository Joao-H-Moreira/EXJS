document.getElementById("titulo").innerText ="Olá Mundo";
// = substitui o que já havia 

document.getElementById("titulo").innerText +="Batata";
// += adiciona conteudo 

let pai = document.getElementById("artigos");
let filho = document.createElement("h2");
filho.innerText = "Sou um titulo";
pai.appendChild(filho);
// appendChild adiciona o elemento criado
pai.removeChild(filho);
// removeChild remove o elemento adicionado

