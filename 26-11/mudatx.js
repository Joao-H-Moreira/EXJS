const mensagem = document.getElementById("mensagem");
const mudaMensagem = document.getElementById("mudaMensagem");

mudaMensagem.addEventListener("click", () => {
    mensagem.innerText = "Mensagem alterada com sucesso!";
});
