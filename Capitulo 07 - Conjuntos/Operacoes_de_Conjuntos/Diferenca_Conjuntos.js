import { Set } from "../classe_Set.js";

// 1º) Diferença de Conjuntos
let conjuntoA = new Set();
conjuntoA.add(1);
conjuntoA.add(2);
conjuntoA.add(3);
conjuntoA.add(4);

let conjuntoB = new Set();
conjuntoB.add(4);
conjuntoB.add(5);
conjuntoB.add(6);
conjuntoB.add(7);

const diferencaA_B = conjuntoA.difference(conjuntoB);
console.log("Diferença de Conjuntos");
console.log(diferencaA_B.values());