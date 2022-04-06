// const numbers = [1, -2, 15, 2, 0, 8];
// console.log(`Array Original: [${numbers}]`)

// let numbersOrd = numbers.sort((a, b) => a - b);
// console.log(`Array Ordenado: [${numbersOrd}]`)

// let names = ["Harry", "Hermione", "Draco", "Cedric"];
// names.sort((a, b) => a > b ? 1 : -1);
// console.log(names);

let best_students = [
    { name: "Harry", points: 10 },
    { name: "Hermione", points: 25 },
    { name: "Draco", points: 0 },
    { name: "Cedric", points: 5 },
]

let resultado_decrescente = best_students.sort((a, b) => b.points - a.points);
console.log(resultado_decrescente);

let resultado_crescente = best_students.sort((a, b) => a.points - b.points);
console.log(resultado_crescente);