let form = document.getElementById("cadastro");
let situacao = document.getElementById("status");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    situacao.innerText = "CADASTRADO COM SUCESSO!";
});
