//1. Imagine que você está criando um sistema escolar para obter a média dos alunos da sala. Foram realizadas 3 avaliações com nota máxima de 10 pontos. Aline, tirou na primeira nota o total de 8 pontos, na segunda nota tirou 9 pontos e na terceira nota 7 pontos. 

//**Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.**

function calcularMedia(nota1, nota2, nota3) {
    var media = (nota1 + nota2 + nota3) / 3;
    return media;
}

var nota1 = 8;
var nota2 = 9;
var nota3 = 7;

var mediaAline = calcularMedia(nota1, nota2, nota3);

console.log("A média de Aline é: " + mediaAline);
