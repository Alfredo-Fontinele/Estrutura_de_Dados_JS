// Temos duas opções para pesquisa 
// O método indexOf que devolve o índice do primeiro elemento correspondente
// ao argumento passado, e lastIndexOf, que devolve o índice do último elemento encontrado

let numbers = [10,20,30,40,50];

const localPeloNumero = (array, number) => {
    let resultado = array.indexOf(number) + 1;
    console.log(`Array: [${array}]\nNúmero: ${number}\nLocalização: ${resultado}º Posição`);
}

numbers.unshift(-1); // insere no inicio
numbers.push(300); // insere no fim
numbers.shift() // remove o 1º elemento
numbers.pop() // remove o último elemento

// localPeloNumero(numbers, 20);

function limparArray(array) {
    for (let valores of array) {
        array.pop(valores);
    }
}

function inserirInicio(array_original, valores) {
    for (let valor of valores) {
        array_original.unshift(valor);
    }
}

function inserirFinal(array_original, valores) {
    for (let valor of valores) {
        array_original.push(valor);
    }
}

let numeros = [40,50,140,60];

inserirInicio(numeros, [4,5,6,1]);

console.log(numeros);