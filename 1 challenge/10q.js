// Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

const frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let contadorLetrasMaiusculas = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === frase[i].toUpperCase() && frase[i] !== " ") {
        contadorLetrasMaiusculas++;
    }
}

console.log("O número de letras maiúsculas na frase é:", contadorLetrasMaiusculas);
