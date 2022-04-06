let array = [2,4,3,5,9,10,23,45,6];

function numeroPeloIndice(array, indice) {
    let i = indice;    
    if (i in array) {
        console.log(`Array: [${array}]`)
        return console.log(`- No índice ${i} está o número ${array.at(i)}\n- Posição: ${array.length - 1}º elemento do array`)
    }
    else {
        console.log(`Array: [${array}]`)
        return console.log(`- O array tem apenas: ${array.length} elementos`);
    }
}

numeroPeloIndice(array, 4);