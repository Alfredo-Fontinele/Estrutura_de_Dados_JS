const midudev = {
    web: 'midu.dev',
    twitter: '@midudev',
    youtube: 'youtube.com/midudev'
}

console.log(Object.keys(midudev))

console.log(Object.values(midudev))

console.log(Object.entries(midudev))


let objeto = {
    nome: ['Alfredo', 'Neto'],
    idade: [19],
    sexo: ['M']
}

let chaves_objeto = Object.keys(objeto);
let valores_objeto = Object.values(objeto);
let array_objeto = Object.entries(objeto);

console.log(`Chaves:\n`);
console.log(chaves_objeto);

console.log('\n');

console.log(`Valores:\n`);
console.log(valores_objeto);

console.log(`Todos:\n`);
console.log(array_objeto);

console.log(objeto);