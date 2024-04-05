// Escreva um programa para encontrar o fatorial do número 12.

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const numero = 12;
const resultado = fatorial(numero);

console.log("O fatorial de", numero, "é:", resultado);
