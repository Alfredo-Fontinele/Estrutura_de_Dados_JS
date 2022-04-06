function isEven(x) {
    //devolve true se x for múltiplo de 2
    //caso não, devolve false
    console.log(x);
    return x % 2 === 0 ? true : false;
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let valores of numbers) {
    console.log(isEven(valores));
    console.log('');
}

// O código acima pode ser reescrito usando Função de Seta

// const isEven = x => x % 2 === 0;