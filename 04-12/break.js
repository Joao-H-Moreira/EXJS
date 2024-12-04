// Exemplo 2 break
let frutas = ["Maçã", "Banana", "Laranja", "Manga"]
let frutaProcurada = "Laranja"

for (let i = 0; i < frutas.length; i++) {
  console.log(`Verificando: ${frutas[i]}`)

  if (frutas[i] === frutaProcurada) {
    console.log(`Fruta encontrada: ${frutas[i]}`);
    break; // Interrompe o loop ao encontrar a fruta
  }
}