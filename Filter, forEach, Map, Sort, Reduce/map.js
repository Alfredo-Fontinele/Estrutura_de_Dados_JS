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