import { defaultEquals } from "./funcao_defaultEquals";
import { Node } from "./classe_Node";

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) { //Obtém o último elemento
                current = current.next;
            }
            // atribui o novo elemento a next para criar a ligação
            current.next = node;
        }
        this.count++;
    }

    removeAt(index) {
        // Verifica os valores fora do intervalo
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // remove o primeiro item
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous;
                for (let i = 0; i <index; i++) {
                    previous = current;
                    current = current.next;
                }
                // faz a ligação de previous com o next de current: pula esse elemento para removê-lo
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) { // adiciona na primeira posição
                const current = this.head;
                node.next = current.next;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true
        }
        return false;
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }

}

// A variável head é uma variável privada da classe LinkedList em uma string.
// Eis a implementação do método String

//Parei na página 159