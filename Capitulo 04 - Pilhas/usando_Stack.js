// Criaremos nossa prórpia classe para representar uma pilha

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]; // retorna o último elemento adicionado
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty()) // retorna true, por que criamos uma const vazia

stack.push(5);
stack.push(8);

console.log(stack.peek()); // exibe 8, pois é o último elemento adicionado

stack.push(11);
console.log(stack.size()); // exibe 3
console.log(stack.isEmpty()); // exibe false

stack.push(15);

// Agora vamos remover os dois elementos da pilha chamando o método pop duas vezes

console.log(stack.size());
stack.pop();
stack.pop();
console.log(stack.size()); // exibe 2
console.log(stack);