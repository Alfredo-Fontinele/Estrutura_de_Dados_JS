let names = ['Ana', 'ana', 'john', 'John'];

// console.log(names.sort());

// Se passarmos uma compareFunction contendo o código para ignorar 
// as diferenças de letras maiúsculas e minúsculas, a saída obtida será:

function compareFunction(array) {
    let resultado = array.sort((a, b) => a.toLowerCase() - b.toLowerCase());
    return console.log(resultado);
}

compareFunction(names);