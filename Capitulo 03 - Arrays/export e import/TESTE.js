import { ordenar, somar } from "./Funcoes.js";

console.log('\nExportação e Importação feitos com Sucesso!!!\n\n')

let numbers = [4,6,1,2];

console.log(`1-> Array Original: [${numbers}]`);

let ordem = ordenar(numbers);

console.log(`2-> Resultado: [${ordem}]`);

let soma = somar(5, 6);

console.log(`\nResultado do Teste da Função Soma: ${soma}`);