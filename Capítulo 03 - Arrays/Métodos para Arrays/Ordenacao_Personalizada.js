const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 },    
];

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }

    else if (a.age > b.age) {
        return 1;
    }

    else {
        return 0;
    }
}

// console.log(friends.sort(comparePerson));

// A função acima pode ser reescrita assim: 

const comparacaoIdade = (a, b) => a.age - b.age;

// console.log(friends.sort(comparacaoIdade));

// A função acima pode ser reescrita assim, deixando-a mais completa:

function comparar_amigos(array) {
    let comparacao = (a, b) => a.age - b.age;
    let resultado = array.sort(comparacao);
    return console.log(resultado);
}

comparar_amigos(friends);