// O método fill preenche o array com um valor. 
// Por exemplo, considere o array a seguir

let numbersCopy = Array.of(1,2,3,4,5,6);

console.log(numbersCopy.fill(0));

console.log(numbersCopy.fill(2, 1));

console.log(numbersCopy.fill(1, 3, 5));

// O método fill é ótimo para criar um array e inicializar seus valores

let twos = Array(6).fill(2);  // Preenche o array de 6 posições com o número 2
console.log(twos);