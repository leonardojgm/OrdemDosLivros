const autor = {
    id: 'j-k-rowling',
    nome: 'J. K. Rowling',
    idade: 65,
    imagem: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80',
    biografia: "...",
};

console.log(autor.id);
console.log(autor.imagem);
console.log(autor["nome"]);

const livro = {
    id: "harry-potter-e-a-pedra-filosofal",
    nome: "Harry Potter e a Pedra Filosofal",
    autor: autor,
    ano: 1997,
    orderm: 1,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg"
}

console.log(livro.nome);
console.log(livro.autor.nome);