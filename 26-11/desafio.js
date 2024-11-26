const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

botao.addEventListener("mouseover", () => {
  
    if (caixa.classList.contains("oculto")) {
        
    caixa.classList.replace("oculto", "visivel");     
}
});

botao.addEventListener("mouseout", () => {
  
    if (caixa.classList.contains("visivel")) {
        
    caixa.classList.replace("visivel", "oculto");     
    }
});