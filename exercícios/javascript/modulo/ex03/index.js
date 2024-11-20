import series from "../dados/series.js";

for (let serie of series) {
    console.log("\n\n", serie.titulo);

    for (let livro of serie.livros) {
        if (livro.ano <= 2000) {
            console.log("\t-", livro.titulo);
        } else {
            console.log("\t-", "***muito novo");
        }
    }
}