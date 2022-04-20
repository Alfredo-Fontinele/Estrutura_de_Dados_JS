// Criaremos nossa prórpia classe para representar uma fila.

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    // Método responsável pela adição de novos elementos no final, por isso se chama fila e não pilha
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    //Verifica se a fila está vazia, devolve true se sim, e false se não
    isEmpty() {
        return this.size() === 0;
    }

    //Elimina o 1º elemento da fila
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    // Devolve o 1º elemento da fila
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    // Devolve o número de elementos contidos na fila
    size() {
        return this.count - this.lowestCount;
    }

    // Limpando totalmente a fila
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    // Mostra a Fila
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

//===================================================================

// Usando a classe Queue

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');

console.log(queue.isEmpty());  // false
console.log(queue.toString());  // John, Jack

queue.enqueue('Camila');

console.log(queue.toString()); // John, Jack, Camila
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false

queue.dequeue() // remove John
queue.dequeue() // remove Jack
console.log(queue.toString()); // Camila