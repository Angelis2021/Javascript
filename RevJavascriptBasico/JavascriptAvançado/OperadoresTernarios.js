// Esses operadores possibilitam escrever estruturas de condição de forma menos verbosa ( como menos linhas)


//Exemplo com estrutura tradicional

// if(idade>=18){
//     return 'Maior de idade'

//  } else {

//         return 'Menor de idade'
// }



 //
//     function calculaIdade(idade){

//         if(idade>=18){
//             return 'Maior de idade'      // funcão com forma tradinal de strutura condicional
        
//          } else {
        
//                 return 'Menor de idade'
//             }  
//     }

//  console.log(calculaIdade(40))

// Agora com o operador ternário

//idade>=18 ? 'Maior idade' : 'Menor idade'   // operação ternária, a condição verdade
                                            // está antes da "?" e os blocos de execução
                                            // if e else separados por ://

function calculaIdade (idade){
    return idade >=18 ? 'Maior idade' : 'Menor idade'
    
}
console.log(calculaIdade(5))

