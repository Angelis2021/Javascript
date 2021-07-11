// const alunaGama = ["Paula", "Marcela","Darci"]
//  console.log (alunaGama)
// console.log(alunaGama[1]) // retorna o elemento da array presente no indice 1

// //spread (...) copia a informação da array citada após "..." sem alterar a informação

// const alunaVtex = [...alunaGama, "Ahsana"]
// console.log(alunaVtex)


//Metodo de iteração

// for(i=0; i< alunaVtex.length; i++){
//     //console.log(alunaGama)
//     //console.log(alunaVtex[2])
//     console.log(alunaVtex[i])
// }


//Metodo Map
//alunaVtex.map(aluna => console.log(aluna))


//Metodo filter

//  const num =[3,5,8,1, 25, 50, 39, 47] 
//  console.log(num.sort ( ))

//  const numImpares =num.filter(num => num%2!=0) //filtrará apenas os numeros impares presentes na array
//  console.log(numImpares)
//  const numPares =num.filter(num => num%2===0)//filtrará apenas os numeros pares presentes na array
//  console.log(numPares)


 
 //console.log( numordemCrescente)

// Metodo Find Encontra um elemento dentro da array
// const produtos= ["geladeira", "fogão", "sapato", "cama"]
// const produtoFiltrado= produtos.find(produtos => produtos ==="sapato")
// console.log(produtoFiltrado)


// Metodo Reduce
// Reduz o array a um resultado de uma operação matemática
const numbers = [1,25,25]
const soma = numbers.reduce ((valorAnterior, ValorAtual) => {
    return valorAnterior + ValorAtual


},5)
console.log(soma)