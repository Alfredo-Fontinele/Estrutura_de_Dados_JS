// Esse método devolve tre caso um elemento seja encontrado no array, e false caso contrário.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let num = 100;
cade_o_numero = numbers.includes(num);

// if (cade_o_numero == true) {
//     console.log(`O número ${num} existe na lista de números, portanto: ${cade_o_numero}`);
// }

// else {
//     console.log(`O número ${num} não existe na lista de números, portanto: ${cade_o_numero}`);
// }

// também é possível passar um índice de início a partir do qual queremos que o array 
// faça a pesquisa do valor:

let numbers2 = [7,6,5,4,3,2,1];
// console.log(numbers2.includes(4, 3)) // ==> No índice 4, tem o número 3? se sim ele retorn true, se não, false

function pesquisaNoArray(array, indice, numero) {
    let resultado = array.includes(indice, numero);
    return console.log(resultado);
}

pesquisaNoArray(numbers2, 0, 7);