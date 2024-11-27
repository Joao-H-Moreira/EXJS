const mensagem = document.getElementById("mensagem");
const mudaMensagem = document.getElementById("mudaMensagem");
const reset = document.getElementById("reset")

mudaMensagem.addEventListener("click", () => {
    mensagem.innerText += "Mensagem alterada com sucesso!";
});

reset.addEventListener("click", () =>{
    window.location.reload();
});