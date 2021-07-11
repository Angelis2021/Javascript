//Estruturas condicionais//
//if//
var num =1;
num=5
if (num ===1){

    console.log("num é igual a 1") // Para estabelecer que a variável num recebe outo valor é preciso usar else
} else { //não precisa de condição
    
    console.log("num é diferente de 1")
}


// Quando for estabelecer duas condições de teste verdadeira e uma última falsa, usa-se o elseif

var bora =1;
bora=5;

if (bora ===1){

    console.log("bora é igual a 1") // Para estabelecer que a variável num recebe outo valor é preciso usar else
} else if (bora ===2){
    console.log("bora é igua a 2")
}else{
    console.log("bora é diferente de 1 e de 2, ele é igual a 5")
}


// o switch case é utilizado para verificar casos possíveis de veracidade para uma determinada condição//
var mes = "janeiro";
switch (mes){ // mes é a condição que sempre será verdadeira//
    case "fevereiro":
    console.log("Não é o mês desejado");
    break; // para o bloco de código quando a condição case é contemplada

    case"março":
    console.log("Ainda não chegamos lá...");
    break;

    case "janeiro":
    console.log(" O papai chegou!!")
    break; 

    default: // Corresponde ao bloco que predomina quando o valor desejado não é encontrado
        console.log("Caramba! Pior que agulha no palheiro");

} 