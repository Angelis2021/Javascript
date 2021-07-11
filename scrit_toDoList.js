const listConteiner = document.querySelector ('[data-lists]')   //document é uma variavel reservada, que indica que o DOM de algum documento do HTML está sendo acessado.
// O querySelector () é um método da interface Element. O querySelector () permite que você encontre o primeiro elemento que corresponda a um ou mais seletores CSS. Você pode chamar o método querySelector () no documento ou em qualquer elemento HTML.
//console.log(listConteiner)
const newListForm = document.querySelector ('[data-new-list-form]')// Vai captar o formulário
const newListInput = document.querySelector ('[data-new-list-input]')//Vai capturar o que foi colocado na caixa
// as consts acima pegaram a listas do html e jogaram para o js

let lists =[ ]// lista vazia para os itens a serem adicionado

 newListForm.addEventListener('submit', function(e){ //Essa funçãovai ligar o botão//add.EventListener=liga eventos, é o umétodo qu e recebe dois parâmetros (o tipo de evento que se quer ligar "submit" e uma função callback "e").Toda tag form tem um comportamento padrão do navegador e toda vez que o submit é clicado, a página é atualizada
     e.preventDefault(); // Evita ocomportamento padrão do navegador, ou seja, de atualizar a página
     const listName= newListInput.value //o que for capturado pelo input, será guardado em listName
     if (listName === null || listName ==='') return //se esse if for contemplado, o algoritmo para... caso contrário, a listName é povoado
     const list =createList(listName);//Permite que a lista seja povoada
     newListInput.value = null; // Após o clique no input, o campo é limpo
     lists.push(list) //"PUSH" método que coloca o item no final da array
     render()


 } )

 function createList(name){ //Receberá o nome de "name" e tem como funçãoorganizar a entrada dos item na array "let lists" 
    return { id:Date.now().toString, name: name} //Função que retronará de forma dinâmica, o horário atual e o transformará em string, assim como tmbém retornará o "name"
    
    }
    

 function render(){ // vai mostrar os itens na tela
   clearElement(listConteiner)
    lists.forEach(function(list) {  // precisa de uma função anonima de retorno
        const item = document.createElement('li') // Vai criar uma lista de item e jogar para o html// Criou uma lista "li" 
        item.classList.add('item') // Cria uma classe que a adiciona a lista de classe. A nova class se chama item 
        item.innerText=list.name // recupera o item e mandar receber "innerText" a variavel list pelo nome
        listConteiner.appendChild(item)//o elemento que receberá os item será "ListContainer.child" (filha de listContainer) 

    })    
}    
 function clearElement(element){// função criada para remover elementos
    while (element.firstChild){// Quando o element foro primeiro da lista, remova o elemento o primeiro elemento função criada porque o primeiro elemento estava sendo repetido 
    element.removeChild(element.firstChild)

    }


 }


render()