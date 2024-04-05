// Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar. Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número. 

// Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.


// Função para encontrar o menor número em uma lista
function encontrarMenorNumero(listaNumeros) {
    var menor = listaNumeros[0]; // Assume que o primeiro número é o menor
    for (var i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] < menor) {
            menor = listaNumeros[i]; // Atualiza o menor número se encontrar um número menor
        }
    }
    return menor;
}

// Função para encontrar o maior número em uma lista
function encontrarMaiorNumero(listaNumeros) {
    var maior = listaNumeros[0]; // Assume que o primeiro número é o maior
    for (var i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > maior) {
            maior = listaNumeros[i]; // Atualiza o maior número se encontrar um número maior
        }
    }
    return maior;
}

// Lista de números fornecidos
var numeros = [15, 8, 90, 75, 102, 6, 2];

// Encontra o menor número na lista
var menorNumero = encontrarMenorNumero(numeros);

// Encontra o maior número na lista
var maiorNumero = encontrarMaiorNumero(numeros);

// Imprime o menor e o maior número
console.log("O menor número é: " + menorNumero);
console.log("O maior número é: " + maiorNumero);
