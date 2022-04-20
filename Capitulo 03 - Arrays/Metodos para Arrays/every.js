// Nesse caso, o nosso primeiro elemento do array é 1
// O número 1 não é múltiplo de 2, portanto, a função isEven devolverá false,
// e essa será a única vez que o método every será executado

function isEven(x) {
    //devolve true se x for múltiplo de 2
    //caso não, devolve false
    console.log(x);
    return x % 2 === 0 ? true : false;
}

let numbers = [1,2,3,4,5];

numbers.every(isEven);