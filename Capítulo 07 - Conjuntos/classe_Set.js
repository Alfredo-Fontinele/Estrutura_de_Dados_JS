class Set {

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

    values() {
        return Object.values(this.items);
    }

}

// Testes na Classe

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