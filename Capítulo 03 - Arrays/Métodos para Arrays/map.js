// a const myMap armazena os resultados da função isEven, passada para o método map

function isEven(x) {
    //devolve true se x for múltiplo de 2
    //caso não, devolve false
    console.log(x);
    return x % 2 === 0 ? true : false;
}

let numbers = [1,2,3,4,5];

const myMap = numbers.map(isEven);

console.log(myMap);