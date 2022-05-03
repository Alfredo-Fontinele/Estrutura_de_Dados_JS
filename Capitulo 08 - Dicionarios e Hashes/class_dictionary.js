import { defaultToString } from "./defaultToString";

export default class Dictionary {

    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
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

    // Verificando se a chave está presente no dicionário
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    // Definindo uma chave e valor no dicionário, e a classe ValuePair
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, valor);
            return true;
        }
        return false;
    }

    // Removendo um valor do dicionário
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    // Obtendo um valor ddo dicionário
    get(key) {
        if (this.hasKey(key)) {
            return this.table[this.toStrFn(key)];
        }
        return undefined;
    }

    // Método que retorna um array com todos os objetos ValuePair presentes no dicionário
    keyValues() {
        return Object.values(this.table);
    }

    // O método acima keyValues só funciona em navegadores novos
    // Para o caso de navegadores antigos, há o código abaixo:

    keyValues() {
        const valuePairs = [];
        for (const k in this.table) {
            if (this.hasKey(k)) {
                valuePairs.push(this.table[k]);
            }
        }
        return valuePairs;
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    // Iterandos pelos ValuePairs do dicionário com forEach

    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.table = {}
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }

}

// Usando a Classe Dictionary

const dict = new Dictionary();
dict.set("Gandalf", "gandalf@gmail.com");
dict.set("Bilbo", "bilbo@gmail.com");
dict.set("Tyrion", "tyrion@gmail.com");

console.log(dict.hasKey("Gandalf"));


















