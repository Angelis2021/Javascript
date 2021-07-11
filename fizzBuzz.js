//É um algortimo queridinho das pesquisas. Seguem as etapas do desafio
//FizzBuzz
//Se a entrada for divísel por 3, o console exibe 'Fizz'
//Se a entrada for divísel por 5, o console exibe 'Buzz'
//Se a entrada for divísel por 3 e 5, o console exibe 'FizzBuzz'
//Se não for um número, o console exibe 'Não é um número'
//Se não for divisível nempor 3 e nem por 5, o console exibe o valor da entrada


let resultado = fizzBuzz(25);
console.log(resultado);

function fizzBuzz (entrada) {

 if (typeof entrada !== 'number'){;
    return 'Não é um número';
 }if((entrada%3===0) && (entrada % 5===0)){
 return 'FizzBuzz';

 } if(entrada%3===0) {
 return 'Fizz'

 } if (entrada % 5===0){
     return 'Buzz';

 }else ((entrada%3!=0) || (entrada%3!=0)) 
    return entrada



}    