// a Estrutura de dados de deque, também conhecida como fila de duas pontas 
// (double-ended queue), é uma fila especial que nos permite inserir e 
// remover elementos do final ou da frente da fila
// Em Ciência da Computação, uma aplicação comum de um deque 
// é na armazenagem de um lista de operações para desfazer ações (undo)

class Deque {
    constructor() {
        this.count = 0;
        this.lowerCount = 0;
        this.items = {};
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        }
        else if (this.lowerCount > 0) {
            this.lowerCount--;
            this.items[this.lowerCount] = element;
        }
        else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowerCount = 0;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        } 
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    
    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }    

}

//====================APLICANDO========================================================


const deque = new Deque();
console.log(deque.isEmpty()) // true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John, Jack
deque.addBack('Camila');
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.size); // 3
console.log(deque.isEmpty()); // false
deque.removeFront(); // remove John
console.log(deque.toString()); // Jack, Camila
deque.removeBack();  // remove Camila
console.log(deque.toString()); // Jack
deque.addFront('John'); // John retorna ao inicio
console.log(deque.toString()); // John, Jack