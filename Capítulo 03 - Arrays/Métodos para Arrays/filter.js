// filter devolve um novo array com os elementos 
// para os quais a função devolveu true, assim:

function isEven(x) {
    console.log(x);
    return x % 2 === 0 ? true : false;
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const evenNumbers = numbers.filter(isEven);

console.log(`\nNúmeros Múltiplos de 2: [${evenNumbers}]`);