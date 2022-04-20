export class Set {

    constructor() {
        this.items = {};
    }

    has(element) {
        return element in this.items;
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    // Extrai cada propriedade do objeto items manualmente
    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    values() {
        return Object.values(this.items);
    }

    // Código que pode ser executado em qualquer navegador
    // Ele é equivalente ao código anterior
    valuesLegacy() {
        let value = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                this.values.push(key);
            }
        }
        return value;
    }

    // União de Conjuntos            
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    // Interseção
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        })
        return intersectionSet;
    }

    // Diferença entre Conjuntos
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        })
        return differenceSet;
    }

    //Subconjuntos
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        })
        return isSubset;
    }

}






























// Testes 01 na Classe

const set = new Set();
set.add(1);
console.log(set.values()); // exibe [1]
console.log(set.has(1)); // exibe true
console.log(set.size()); // exibe 1

set.add(2);
console.log(set.values());  // exibe [1, 2]
console.log(set.has(2));   // exibe true
console.log(set.size());   // exibe 2

set.delete(1); 
console.log(set.values());  // exibe [2]

set.delete(2);
console.log(set.values());  // exibe []


// Testes 02 na Classe

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionA_B = setA.union(setB);
console.log(unionA_B.values());

// Testes 03 na Classe

const setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);

const setD = new Set();
setD.add(2);
setD.add(3);
setD.add(4);

const differenceC_D = setC.difference(setB);
console.log(differenceC_D.values());


// Agora temos uma implementação muito semelhante á classe Set da ECMAScript 2015