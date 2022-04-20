let numbers = [10,20,40,5];

let aEntries = numbers.entries(); // Obtém um iterador de chave/valor 
console.log(aEntries.next().value); // posição 0, valor 10
console.log(aEntries.next().value); // posição 1, valor 20
console.log(aEntries.next().value); // posição 2, valor 40
console.log(aEntries.next().value); // posição 3, valor 5

// ================================================================================

let numbers1 = [10,20,40,5];

const aKeys = numbers1.keys(); // Obtém um iterador de chaves
console.log(aKeys.next()); // {valor: 0, done: false}
console.log(aKeys.next()); // {valor: 1, done: false}
console.log(aKeys.next()); // {valor: 2, done: false}
console.log(aKeys.next()); // {valor: 3, done: false}

// done = false ==> significa que ainda há mais chaves para iterar no array


// ================================================================================

let numbers2 = [10,20,40,5];

const aValues = numbers2.values(); 
console.log(aValues.next());  // {valor: 10, done: false}
console.log(aValues.next()); // {valor: 20, done: false}
console.log(aValues.next()); // {valor: 40, done: false}