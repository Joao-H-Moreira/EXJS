let titulo = document.getElementById("titulo");
titulo.innerText = "DOM em Ação!";

let lista = document.querySelector("ul");
let novoItem = document.createElement("li");
novoItem.innerText = "Item 3";
lista.appendChild(novoItem);

let banana = document.createElement("li");

banana.innerText = "Batata";

lista.appendChild(banana);