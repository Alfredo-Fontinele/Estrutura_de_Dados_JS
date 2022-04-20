import { Set } from "../classe_Set.js";

// 1º) Intersecção de Conjuntos
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

const interseccaoA_B = conjuntoA.intersection(conjuntoB);
console.log("Intersecção de Conjuntos");
console.log(interseccaoA_B.values());