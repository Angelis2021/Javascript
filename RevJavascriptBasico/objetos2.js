const filme = [
    {
        id:1,
        Titulo:"Guerra do Amanhã",
        Plataforma: "Amazon",
        Ano: 2021,
        Idioma: "Inglês",
        Categoria: "Ficção"


    },

    {
        id:2,
        Titulo: "Dilema das redes",
        Plataforma: "Netflix",
        Ano: 2020,
        Idioma: "Inglês",
        Categoria: "Documentário"


    },

    {
        id:3,
        Titulo: "Corra",
        Plataforma: "Amazon",
        Ano: 2019,
        Idioma: "Inglês",
        Categoria: "Suspense"


    },


]

const [{id, Titulo, Plataforma, Ano, Idioma, Categoria}] = filme
//console.log(Titulo)
//console.log(Plataforma)

newfilme= filme.map(filme => console.log(filme.Ano))

NewTitle = filme.map(filme => console.log(filme.Titulo))