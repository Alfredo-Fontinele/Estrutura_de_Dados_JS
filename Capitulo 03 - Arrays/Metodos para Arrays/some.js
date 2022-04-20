// O método some é o oposto do every
// ele itera pelos elementos do array até que a função retorne true

function isEven(x) {
    //devolve true se x for múltiplo de 2
    //caso não, devolve false
    console.log(x);
    return x % 2 === 0 ? console.log(true) : console.log(false);
}

let numbers = [1,2,3,4,5];

numbers.some(isEven);