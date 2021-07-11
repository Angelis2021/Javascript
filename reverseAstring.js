// Vai imprimir um valor ao contrário no console//

let mundoinverso = '';
    function reverseAstring (str){
        for(let i = str.length - 1; i >=0; i--){
            mundoinverso += str[i];
            console.log(mundoinverso)

        }
       
    }

    let resultado = reverseAstring ('É Cacilds')