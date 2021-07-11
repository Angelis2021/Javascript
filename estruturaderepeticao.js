// As estruturas de repetição são formadas pelo "FOR", "While" e "  ". Elas são usadas em trabalhos com array//

var cafe = ["Açucar", "Água", "Pó"];

for(var i=0; i<cafe.length; i++){ //i<cafe.lenght pode ser substituído pela quantidade de índices da array, ou seja, 3//

    console.log(cafe[i]);
}

//Segundo exemplo

for (var i=1; i<10;i++) {
    console.log(i)
}

//Estrutura de repetição com While//
//Essa estrutura mantem a execução do bloco de código enquanto uma condição for verdadeira//

var c = 2;

    while (c<5){

    console.log(c);
    c++;
}

//uso do do while.//
// Nessa estrutura de reptição o bloco de código é executado antes de verificar se uma condição é verdadeira.

var d = 1;

do{

    console.log(d);
    d++;
}while (d<7);