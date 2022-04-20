const ordenarArray = (array) => {
    let resultado = array.sort((a, b) => a - b);
    return resultado;
};

let array = [200,40,1,2,1010];

console.log(ordenarArray(array));

// Pode ser escrito dessa forma ou desta forma:

const Order = array => {return array.sort((a, b) => a - b)};

let array2 = [200,40,1,2,1010];

console.log(Order(array2));