//Escreva uma função que verifique se uma string é um palíndromo 
//(lê-se da mesma forma de trás para frente).

palavra = "osso"
const verificarPalíndromo = []

for (let i = palavra.length-1; i >= 0; i--) {
    verificarPalíndromo.push(palavra[i])   
}

if (palavra === verificarPalíndromo.join('')) {
    console.log(`${palavra} è um  palíndromo`)
} else {
     console.log(`${palavra} não è um  palíndromo`)
}