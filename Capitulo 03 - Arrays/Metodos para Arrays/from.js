// Array.from() => Serve para copiar um Array existente

let numbers = [1,2,3,4,5];

let numbers2 = Array.from(numbers);

console.log(`Array Original: [${numbers}]`);
console.log(`Novo Array: [${numbers2}]`);


// Também é possível criar uma função para que possamos 
// determinar quais valores queremos mapear

let evens = Array.from(numbers, x => (x % 2 == 0));
console.log(evens);