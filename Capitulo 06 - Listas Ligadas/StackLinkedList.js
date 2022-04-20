class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    //Insere um elemento no fim
    push(element) {
        this.items.push(element);
    }

    //Elimina o último elemento
    pop() {
        return this.items.removeAt(this.size() - 1);
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    size() {
        return this.items.size();
    }

    clear() {
        this.items.clear();
    }

    toString() {
        return this.items.toString();
    }
}