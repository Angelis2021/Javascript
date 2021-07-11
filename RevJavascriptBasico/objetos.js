const pessoa = { // objeto pessoa
    nome:"Marcela", 
    idade: 40,              // nome, idade, profissão são propriedades do objeto pessoa
                            // Marcela, 40 e analista são valores dos  propriedades do objeto pessoa
    profissão: "Analista"
}

// notação de ponto
//pessoa.nome- Retornará o nome pessoa
console.log(pessoa.nome)

// Notação de colchetes
console.log (pessoa['idade'])

//Destructuring como desestrurar objetos - É uma forma menos verbosa de acessar as propriedade de um objetos

const { nome, idade, profissão} = pessoa
console.log(nome)
console.log(idade)
console.log(profissão)