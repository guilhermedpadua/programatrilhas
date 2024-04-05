// Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

function isPrime(num) {
    // Um número primo é maior que 1
    if (num <= 1) {
        return false;
    }
    
    // Verifica divisibilidade a partir de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
const primos = [];

for (let numero of numeros) {
    if (isPrime(numero)) {
        primos.push(numero);
    }
}

console.log("Números primos:", primos);
