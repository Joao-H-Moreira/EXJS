const prompt = require("prompt-sync")();

let Nome = prompt(`Informe seu Nome:`);
let Nota1 = parseFloat(prompt(`Informe sua Primeira nota de 0 a 10: `));
let Nota2 = parseFloat(prompt(`Informe sua Segunda nota de 0 a 10:`));
let Nota3 = parseFloat(prompt(`Informe sua Terceira nota de 0 a 10:`));
let falta = parseFloat(prompt(`Informe as faltas em (%): `));
let media = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3))/3 ;

if (media >10 ){
    console.log(`Media invalida`)
}else if( media  <5 || falta >=25 ){
   console.log(`${Nome}, você esta reprovado. ` )
} else if( media  <7 && media >=5  && falta <25 ){
    console.log(`${Nome}, você esta de recuperação. ` )
 }else if( media >=7 && falta <25 ){
    console.log(`Parabens ${Nome} você foi aprovado. ` )
 }

