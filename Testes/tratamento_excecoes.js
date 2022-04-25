function removeElementByIndex(array, indice) {
    try {
        for (let valor of array) {
            if (valor === indice) {
                delete array[valor];
            }            
        }
        console.log(`Lista: [${array}]`)
    }
    catch (erro) {
        console.log(erro);
    }
    finally {
        console.log("\nAlgoritmo Finalizado com Sucesso\n");
    }
}

let lista = [1,2,3,5];

removeElementByIndex(lista, 1);