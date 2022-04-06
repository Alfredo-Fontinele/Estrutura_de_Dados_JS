let students = [
    { name: "Harry Potter", house: "Grifinória" },
    { name: "Hermione", house: "Grifinória" },
    { name: "Draco", house: "Sonserina" },
    { name: "Cedric", house: "LupaLupa" }
]

let result = students.reduce((acc, current) => {
    return students.house === "Grifinória" ? acc += 1 : acc
}, 0);

console.log(result);