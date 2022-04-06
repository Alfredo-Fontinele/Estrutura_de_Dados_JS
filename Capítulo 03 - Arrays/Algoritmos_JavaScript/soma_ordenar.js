function somar_ordenar(array) {
    let total = 0;
    for (let valor of array) {
        total += valor;
    }
    let frase = `\nArray Original: [${array}]\nArray Ordenado: [${array.sort((a, b) => a - b)}]\nResultado da Soma: ${total}\nQuantidade de Itens no Array: ${array.length}`
    return console.log(frase);
}

somar_ordenar([1,253,3,5,5000]);