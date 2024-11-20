import autores from "./autores.js";

const series = [
    {
        id: "harry-potter",
        titulo: "Harry Potter",
        descricao: "A séride de livros Harry Potter",
        autor: autores[0],
        livros: [
            {
                id: "harry-potter-e-a-pedra-filosofal",
                titulo: "Harry Potter e a Pedra Filosofal",
                ano: 1997,
            },
            {
                id: "harry-potter-e-a-camara-secreta",
                titulo: "Harry Potter e a Câmara Secreta",
                ano: 1998,
            },
            {
                id: "harry-potter-e-o-prisioneiro-de-azkaban",
                titulo: "Harry Potter e o Prisioneiro de Azkaban",
                ano: 1999,
            }
        ],
    }
]

export default series;