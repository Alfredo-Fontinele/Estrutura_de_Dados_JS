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
    setKey(key, value) {
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

}
