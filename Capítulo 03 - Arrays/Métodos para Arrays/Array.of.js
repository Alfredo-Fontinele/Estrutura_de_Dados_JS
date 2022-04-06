// Cria um Array com os valores que estiverem dentro dos parênteses

let numbers = Array.of(13,45,6,12,341);

// É a mesma coisa que fazer um array normalmente

let teste = [1,2,3,4];

// também pode-se usar esse método para 
// fazer cópia de um array existente. Eis exemplo:

let numbersCopy = Array.of(...numbers);
console.log(`Valores Originais de numbers: [${numbers}]`);
console.log(`Cópia do numbers: [${numbersCopy}]`);