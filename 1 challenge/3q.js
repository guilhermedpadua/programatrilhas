//Havia uma antiga guilda de alquimistas que guardava seus segredos em uma série de frascos numerados. No entanto, ao longo dos anos, os frascos foram sendo desorganizados e agora os aprendizes alquimistas precisam restaurar a ordem. Os números dos frascos representam a idade dos alquimistas que os criaram. Eles devem ser ordenados em ordem crescente para revelar um segredo alquímico há muito perdido. Mas, para isso, os aprendizes devem usar suas habilidades em algoritmos de ordenação. 

//Escreva um programa que faça a ordenação dos frascos: 12, 5, 23, 17, 8, 14, 3, 19.

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

const frascos = [12, 5, 23, 17, 8, 14, 3, 19];

console.log("Frascos desordenados:", frascos);

bubbleSort(frascos);

console.log("Frascos ordenados:", frascos);
