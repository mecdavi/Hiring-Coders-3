let valores = [1,2,56,6]
let i

function busca (num){
    // for percorre com i sendo os indices
    for(i = 0; i < valores.length ; i++){
        // num é comparado a cada valor do array atraves de i
        if (num == valores[i]){
            // retorna o valor de indice que ocorreu o match
            return i
        }
    }
    return -1
}

console.log(busca(6))
