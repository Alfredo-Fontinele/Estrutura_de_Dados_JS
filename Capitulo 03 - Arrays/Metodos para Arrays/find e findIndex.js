let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function multipliceOf13(element, index, array) {
    return (element % 13 == 0);
}

numero = numbers.find(multipliceOf13);
indice = numbers.findIndex(multipliceOf13);

console.log(`Array: ${numbers}`);
console.log(`1º Número do array que satisfaz a multiplicidade com 13: ${numero}\nÍndice desse número: ${indice}`);