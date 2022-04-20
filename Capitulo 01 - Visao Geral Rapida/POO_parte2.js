// Uma classe também pode conter funções (em geral, também são chamadas de métodos).
// Podemos declarar e usar uma função/método conforme mostra o código

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

Book.prototype.printTitle = function() {
    console.log(this.title);
}

var book = new Book('Harry Potter', '280', 'teste');

book.printTitle();

// Também podemos declarar funções diretamentye na definição da classe:

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(this.isbn);
    }
}

book.printIsbn();