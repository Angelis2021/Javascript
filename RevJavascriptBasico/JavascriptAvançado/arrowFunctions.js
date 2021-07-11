// arrow functions são utilizadas quando é necessário o uso de funções anõnimas ou funções callback (funções passadas com os parâmetros de outras funções)

// função sem arrow functions

// function soma(a, b) {
//    return a+b
// }
// console.log(soma (5,6))

// Função com arrow function com o exemplo superior

const soma = (n1, n2)=> n1 + n2

console.log(soma (9,1))

// exemplo de arrow function com interpolação

const sayBora = name => `Marcela, bora estudar ${name}`
console.log(sayBora('Javacript'))