let students = [
    { name: "Harry Potter", house: "Grifinória" },
    { name: "Hermione", house: "Grifinória" },
    { name: "Draco", house: "Sonserina" },
    { name: "Cedric", house: "LupaLupa" }
]

students.forEach(students => {
    console.log(`${students.name} belongs to the ${students.house} house`)
})