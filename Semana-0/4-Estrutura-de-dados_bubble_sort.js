let valores = [10,9,8,7,6,5,4,3,2,1]

function bolha(){
    let inicio = 0
    let fim = 10 // isso são os indices não os elementos
    let tmp
    let posicao,vezes
    
    for(vezes = 0; vezes <9; vezes++){
        for(posicao = inicio; posicao < fim - 1; posicao++){
            if(valores[posicao] > valores[posicao+1]){
                tmp = valores[posicao]
                valores[posicao] = valores[posicao + 1]
                valores[posicao + 1] = tmp
            }
        }
    }
}
bolha()
console.log(valores)