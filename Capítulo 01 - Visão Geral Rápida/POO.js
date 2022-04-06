// Objetos JavaScript são coleções bem simples de pares nome-valor. 
// Há duas maneiras de crair um objeto simples em JavaScript

// 1º Forma

var obj = new Object();

// 2º Forma

var obj = {};

// Também podemos criar um objeto completo, desta maneira:

obj = {
    
    name: {    
        first: 'Gandalf',
        second: 'the Grey'
    },

    address: 'Middle Earth',

    friends: {
        first: 'Thorin',
        second: 'Bilbo Baggins',
        third: 'Frodo Baggins'
    },

    job: 'Wizzard',

    age: 'Unknow'

}

// Eis o modo de como podemos declararr uma classe (construtor) que representa um livro:

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('Harry Potter', '280', 'Teste')

console.log(book.pages)
console.log(book.title)
console.log(book.isbn)


book.title = 'Harry Potter e a Pedra Filosofal'  // atualizando o valor contido na propriedade title do objeto Book

console.log(book.title)