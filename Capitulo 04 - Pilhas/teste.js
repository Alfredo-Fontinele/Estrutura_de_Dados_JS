let lista = [1,2,3,4,5];

function pesquisaIndice(lista, numero) {
    let local = lista.indexOf(numero);
    if (numero in lista) {
        console.log(`\nArray: [${lista}]\nPosição: ${local + 1}\nIndice: ${local}`);
    }
    else {
        console.log('Número Inexistente');
    }
}

// pesquisaIndice(lista, 20);

const soma = (array) => {
    let resultado = 0;
    for (let valores of array) {
        resultado += valores;
    }
    return console.log(resultado);
}

let media = soma(lista) / lista.length;
console.log(media);