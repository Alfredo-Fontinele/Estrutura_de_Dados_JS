function sum(x=1, y=2, z=3) {
    return x + y + z;
}

let params = [3,4,5];
console.log(sum(...params)) // ... => operador de espalhamento (spread operator)

// Código Acima Reescrito Diferentemente

console.log(sum.apply(undefined, params))

// O operador de espalhamento (...) também pode ser usado como um parâmetro rest
// em funções para substituir arguments. Considere o exemplo a seguir:

function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length;
}

console.log(restParamaterFunction(1, 2, 'hello', true, 7))

// O código acima é semelhante ao código a seguir:

function restParamaterFunction(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}

console.log(restParamaterFunction(1, 2, 'hello', true, 7))