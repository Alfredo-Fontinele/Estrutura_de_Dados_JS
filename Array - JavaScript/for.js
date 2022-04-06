lista_filmes = ['Harry Potter', 'Senhor dos Anéis', 'Hobbit'];

//1º Forma (Tradicional)

for (let filme = 0; filme < lista_filmes.length; filme++) {
    console.log(`\n${filme + 1}º Filme: ${lista_filmes[filme]}`)
}

//==========================================================

//2º Forma (Simples)
let c = 1;
for (let filme of lista_filmes) {
    console.log(`\n${c}º Filme: ${filme}`);
    c++;
}