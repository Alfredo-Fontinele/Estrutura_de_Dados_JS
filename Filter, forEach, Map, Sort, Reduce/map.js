// Exemplo Simples

const x = [1,2,3];

// 1º) Crie uma função que some 1 unidade para cada valor do array acima

function addOne(number) {
    return number + 1;
}

// valores do array somados com 1 unidade
let resultado1 = x.map(addOne);
console.log(resultado1);

// Exemplo Completo

let students = [
    { name: "Harry Potter", house: "Grifinória" },
    { name: "Hermione", house: "Grifinória" },
    { name: "Draco", house: "Sonserina" },
    { name: "Cedric", house: "LupaLupa" }
]

let results = students.map((students) => {
    return { name: students.name, points: students.house == "Grifinória" ? "10 pontos" : "Nenhum Ponto" };
})

console.log(results);