// Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário. A frase é: "What is Lorem Ipsum?"

const frase = "What is Lorem Ipsum?";

// Remove pontuação da frase
const fraseSemPontuacao = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

// Divide a frase em palavras usando espaços como separador
const palavras = fraseSemPontuacao.split(" ");

// Conta o número de palavras
const numeroPalavras = palavras.length;

console.log("Número de palavras na frase:", numeroPalavras);
