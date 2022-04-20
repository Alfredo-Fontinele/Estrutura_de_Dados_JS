import { Set } from "../classe_Set.js";

// 1º) União de Conjuntos
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

const uniaoA_B = conjuntoA.union(conjuntoB);
console.log("União de Conjuntos");
console.log(uniaoA_B.values());