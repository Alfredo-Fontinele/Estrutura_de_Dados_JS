let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,17];

// console.log(numbers.reverse());

// console.log(numbers.sort());

//O método sort deixa os elementos em ordem lexicográfica e pressupõe
// que todos os elementos são strings:

// Posso implementar o código:

let calculo = numbers.sort((a, b) => a - b);
console.log(calculo)

// O código da linha 12 é idêntico a este:

// function compare(a, b) {
//     if (a < b) {
//         return -1;
//     }

//     else if (a > b) {
//         return 1;
//     }

//     // deve ser igual a 0
//     else {
//         return 0;
//     }
// }

// console.log(numbers.sort(compare));

// Ou posso criar uma função que junte o sort() e o compare()

function ordenar(array) {
    let resultado = array.sort((a, b) => a - b);
    return resultado;
}

let numeros = [2,3,6,0,1];

let teste = ordenar(numeros)
console.log(teste);