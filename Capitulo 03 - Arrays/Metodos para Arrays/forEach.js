// Se precisamo fazer a iterarão por todos os elementos do array, independentemente de tudo mais
// use o forEach. O resultado será o mesmo que usar um laço for com o código da função dentro dele, assim:

let numbers = [1,2,3,4,5];

numbers.forEach(x => console.log(x % 2 === 0));

// =================================================================