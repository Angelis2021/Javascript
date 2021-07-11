// As classes são uma estrutura que descreve estados e comportamentos de um determinado objeto.//
//No Javascript as classes são criadas por meio de funções//

class livros{ // cria a classe livros

    constructor(title,author,pages){ // construção dos campos da classe com título,autor e n depáginas
        this.title= title; // Atribui informações ao campo
        this.author= author;
        this.pages= pages;
    }
    read(){ // É um método, que pe uma funcão em que não é preciso o uso do termo function

        return 'Estou lendo: ${title}' //Retorna uma interpolação,ou seja, permite injetar uma variável, uma chamada de função e uma expressão aritmética diretamente em uma string
    }
}


// let book = new livros ('Castas: a origem do nosso mal', 'Suzan',500); // Faz a instancia do book. Instanciar significa que um objeto foi criado usando uma função contrutora particular
// let otherbook = new livros('Princípios de Neurociências', 'Kandel', 2000);// Novo livro criado


// //console.log(otherbook.read()); // Exibe as informações no console
// //console.log(book.read());
// console.log(book,otherbook)

//Outros conceitos da programação orientada a objetos//

                                              //Herança//
//Possibilita herdar informações das classes superiores durante a criação de uma nova classe//
class ITBook extends livros { //Cria uma nova classe a partir da classe superior
    constructor(title, author,pages,technology) { // constructor com as informações cosntantes da nova classe
        super(title,author,pages); // informações herdadas da classe superior
        this.technology = technology; // nova atribuição da nova classe.

    }
}

let itbook = new ITBook ('Como viver de tecnologia', 'Marcela',300); // Faz a instancia do book. Instanciar significa que um objeto foi criado usando uma função contrutora particular
console.log(itbook.title);
