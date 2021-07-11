//

class Person{ // cria a classe livros

    constructor(name){ // constructor com o atributo name
                this._name=name; //"this é uma palavra reservada. Essa linha informa a classe que esse pe um atributo pseudoprivado
    }
    read(){ // É um método, que pe uma funcão em que não é preciso o uso do termo function

        return 'Estou lendo: ${title}' //Retorna uma interpolação,ou seja, permite injetar uma variável, uma chamada de função e uma expressão aritmética diretamente em uma string
    }

    //O get disponibiliza ao "let person" as informações presentes no encapsulamento
    get name(){
        return this._name;

    }
    //o "set" permite a atribuição de novos valores
    
    set name(value){
        this._name=value;

    }


}

let person= new Person ('Marcela');
person.name='Cela';
console.log(person.name)