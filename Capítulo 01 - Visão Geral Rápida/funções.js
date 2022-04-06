// function sayHello() {
//     console.log("Hello");
// }

// function output(text) {
//     console.log(text);
// }

// function sum(v1, v2) {
//     return v1 + v2
// }

// var result = sum(1, 2);

// output(result)

// ===============================================================

function sum(array) {
    resultado = 0;
    for (let valor of array) {
        resultado += valor;
    }
    return console.log(resultado);
}

sum([4,2,36,50]);
