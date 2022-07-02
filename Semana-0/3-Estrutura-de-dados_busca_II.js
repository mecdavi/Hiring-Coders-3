// busca binária - obrigado a estar em ordem crescente
let valores = [1,2,3,6,9,50,56,30,90]

function buscaBin (num){
    let inicio, fim
    let meio

    inicio = 0 // indice 0 da fila
    fim = 9 // tamanho da fila
    //  
    while(inicio <= fim) {
        // posição do meio é igual a soma do inicio com o fim, assim dará a exta do posição do meio
        // parseint para caso o numero de elementos seja par
        meio = parseInt((inicio + fim) / 2)
        // return meio caso o valor procurado seja igual ao valor do meio
        //  return sempre === meio
        if(num == valores[meio]) {
            return meio
            // caso o numero de busca seja maior
        }else if (num > valores[meio]) {
            // o inicio será igual o meio +1, isso representa na segunda tentativa o meio sera a metade da metade
            // caso numero porcuro seja 56
            // meio = 5 + 1 = 6 ->> 10 + 5 = 15 ->> meio = 7 
            // metade maior
            inicio = meio +1
        }else {
            // metade menor
            // caso meio = 5 - 1 = 0 + 4 / 2 == meio = 2
            fim = meio -1
        }
    }   
    return -1
}


console.log(buscaBin(6))

