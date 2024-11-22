const prompt = require("prompt-sync")();

let C = parseFloat(prompt(`Digite a temperatura :`));
let F = (C * 9/5) + 32

console.log(`A temperatura é ${F}ºF`)