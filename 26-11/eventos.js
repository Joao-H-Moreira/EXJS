const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    // Verifica se a caixa tem a classe "visivel"
    if (caixa.classList.contains("visivel")) {
        // Troca a classe para "oculto"
        caixa.classList.replace("visivel", "oculto");
    } else {
        // Troca a classe para "visivel"
        caixa.classList.replace("oculto", "visivel");
    }
});