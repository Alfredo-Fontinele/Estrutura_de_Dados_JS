// let numb = [20,4000,12];

// export function ordenar(variavel) {
//     let resultado = variavel.sort((a, b) => a - b);
//     return resultado;
// }

// console.log(ordenar(numb));

function Subtrair(...valores) {
    return valores.reduce((acc, current) => {
        return console.log(acc - current);
    })
}

Subtrair(40,10);