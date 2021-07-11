// Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos.
// var nota1= 10;
// var nota2= 5;
// var nota3= 4;
// var nota4= 7;
// var nota5= 8;

// let media = 0;



// let newMedia = soma/5;
// console.log(newMedia)

//
 function calculamedia (nota1, nota2, nota3, nota4, nota5){
    let media = (nota1 + nota2 + nota3 + nota4 + nota5)/5;
    return media
  


 }

 console.log(calculamedia(10,5,7,9, 8))

 // Com reduce
const nota =[10,5,7,9, 8]
const soma = nota.reduce((valorAnterior, ValorAtual) =>{
   return valorAnterior + ValorAtual

})

console.log(soma/5)

