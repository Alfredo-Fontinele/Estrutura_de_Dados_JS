let myObj = {
    name: 'John', 
    age: 21
}

console.log(`Objeto que vai ser deletado ==> ${myObj.age}`)

delete myObj.age;

console.log(myObj);