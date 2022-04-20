// export e import só funcionam usando Live Server, HTML e JavaScript tudo junto
// Não funciona aqui no terminal do VS Code

function ordenar(variavel) {
    let resultado = variavel.sort((a, b) => a - b);
    return resultado;
}

function somar(v1, v2) {
    return v1 + v2;
}

export { ordenar, somar }


// ===========================================================
// Teste Aleatório
// const Calculadora = {
//     somar: (v1, v2) => v1 + v2,
//     subtrair: (v1, v2) => v1 - v2,
//     multiplicar: (v1, v2) => v1 * v2,
//     dividir: (v1, v2) => v1 / v2,
// }

// let calculo = Calculadora;

// console.log(calculo.somar(1, 2))
// ===========================================================