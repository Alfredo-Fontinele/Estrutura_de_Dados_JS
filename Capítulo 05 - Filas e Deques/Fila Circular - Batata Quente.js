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

// ==============================================================

function hotPotato(elemetsList, num) {
    const queue = new Queue();
    const eliminatedList = [];
    for (let i = 0; i < elemetsList.length; i++) {
        queue.enqueue(elemetsList[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato Game,.`)
})
console.log(`The winner is: ${result.winner}`);