// As funções são especiais porque elas podem executar algo dentro de um algoritmo. As funções podem ter ou não parâmetros

// Função call sem parâmetro
function call(){

    console.log("Vamos tomar café?");
}

call ();

//Funçõ call com parâmetro

function call2(name){

   console.log("Café," + name +"?") //Parâmetro concatenado com a string
  

}

call2("Marcela");


function call3(name,lastname){

    console.log("Café,"+ " " + name + " " + lastname) //Parâmetro concatenado com a string.As strings vazia colocam espaços
   
 
 }
 
 call3("Marcela", "Pereira");



 function sum(a,b){
    return a+b;
 }
    console.log(sum(40,20));