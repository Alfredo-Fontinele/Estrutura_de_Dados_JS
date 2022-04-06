// Exemplo 1

var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * (r ** 2);
    return area;
};

console.log(circleAreaES5(2))

// Simplificando

const circleArea = r => {
    const PI = 3.14;
    const area = PI * (r ** 2);
    return area;
};

console.log(`Resultado: ${circleArea(2)}`)

// Exemplo 2

var somar = function duplicar(valor) {
    var total = valor * 2;
    return total;
};

// Simplificando

const somar = valor => {
    var total = valor * 2;
    return total;
};

// Exemplo 3

function duplicar(valor) {
    var total = valor * 2;
    return total;
};

// Simplificando

const duplicar = valor => {
    const dup = valor * 2;
    return dup;
};

console.log(`Resultado: ${duplicar(2)}`)

// Exemplo 4

// Se a função tiver uma única instrução, podemos usar uma versão mais simples,
// omitindo a palavra reservada return e as chaves, conforme mostrado no trecho de código abaixo:

const circleArea2 = r => 3.14 * (r ** 2);
console.log(circleArea2(2))

// Exemplo 5

// Se a função não receber nenhum parâmetro, usamos parênteses vazios, comumente usados na ES5:

const hello = () => console.log("Hello")
hello()