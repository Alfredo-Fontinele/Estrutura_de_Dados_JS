let copyArray = [1,2,3,4,5,6];

// Vamos supor que queremos copiar os valores de 4, 5 e 6 para
// as três primeiras posições do array, resultando no array [4,5,6,4,5,6]

let resultado = copyArray.copyWithin(0, 3);
// console.log(resultado);

// Considere agora que queremos copiar os valores 4 e 5 (as poições 3 e 4)
// para as posições 1 e 2. Podemos usar o seguinte código:

let novoArray = [1,2,3,4,5,6];

let result = novoArray.copyWithin(1, 3, 5);

console.log(result)