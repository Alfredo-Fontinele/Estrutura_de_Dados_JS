// O método splice pod ser usado para remover um elemento de um array
// simplesmente especificando a posição/índice a partir do qual queremos 
// fazer a remoção e a quantidade de elementos que gostaríamos de reover, assim:

let numbers = [0,1,2,3,4,5,6,7,8,9];
numbers.splice(5, 3)  // a partir do índice 5, remova 3 elementos do array, isto é, remove o 5, 6 e 7

console.log(numbers);

// Vamos supor que queremos inserir os números de 2 a 4 de volta no array 
// a partir da posição 5. Podemos usar novamente o método splice para isso:

numbers.splice(5, 0, 2, 3, 4);

console.log(numbers);  // os numeros 5, 6 e 7 que são removidos são substituídos por 2, 3 e 4