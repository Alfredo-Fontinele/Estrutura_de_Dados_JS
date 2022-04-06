// Módulos só funcionam lá no console do Chrome, aqui no VS CODE não 
// está disponível para visualização

import { somar } from "./somar.js";
import { multiplicar } from "./multiplicar.js";

let s = somar(10, 20);
console.log(`Resultado da Soma: ${s}`)

let m = multiplicar(2, 30);
console.log(`Resultado da Multiplicação: ${m}`)