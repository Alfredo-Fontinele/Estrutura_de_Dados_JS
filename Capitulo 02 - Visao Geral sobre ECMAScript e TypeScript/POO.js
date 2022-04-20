// function Book(title, pages, isbn) {
//     this.title = title;
//     this.pages = pages;
//     this.isbn = isbn;
// }

// Book.prototype.printTitle = function() {
//     console.log(this.title);
// };

// Com a ES2015, podemos simplificar a sintaxe e usar o código a seguir:

class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log(this.isbn);
    };

    setIsbn(new_isbn) {
        this.isbn = new_isbn;
    }
}

// Aplicando a Classe Book

let book = new Book('Harry Potter e a Pedra Filosofal', 265, 'isbn')
// console.log(book.title);
// book.title = 'Harry Potter e a Câmara Secreta';  // Atualizando o valor da propriedade title
// console.log(book.title);
book.setIsbn('Novo')
book.printIsbn()