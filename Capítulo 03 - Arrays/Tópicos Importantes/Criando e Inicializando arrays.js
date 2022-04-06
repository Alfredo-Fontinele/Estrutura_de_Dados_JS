let daysOfWeek = new Array();  // Criando um Array Vazio

daysOfWeek = new Array(7);  // Especifico o tamanho do array

daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                       'Thursday', 'Friday', 'Saturday');    // Colocando itens no Array

console.log(daysOfWeek)

// Contudo, usar a palavra new não é considerada a melhor prática. 
// Se quisermos criar um array em JavaScript, podemos atribuir colchetes vazios
// como neste exemplo:

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Se quisermos saber quantos elementos há no array (o seu tamanho), 
// podemos usar a propriedade length.

console.log(`\nTamanho do Array day: ${days.length}\n`)