let elementos = []
let topo      = -1
const MAX     = 10

function push(numero){
    // a pilha chegou no limite?
    if(topo < MAX){
        // para topo = posição 0
        topo ++
        elementos[topo] = numero
    }else{
        console.log("A pilha esta cheia")
    }
}

function pop(){
    // pilha não está fazia
    if (topo != -1){
        // numero = o ultimo elemento que entrou na pilha
        // topo aponta para posição do ultimo elemento = index
        let numero = elementos[topo]
        // desconta um indíce caso a função seja chamada novamente
        topo = topo -1
        // retorna o numero do ultimo indíce 
        return numero
    }else{
        console.log('pilha vazia')
    }

}

function pilhaVazia(){
    return topo === -1
}

// usar pilha

push(30)
push(50)
push(30)


console.log(elementos)

console.log(pop())
console.log(pop())
console.log(pop())

console.log(pilhaVazia())

// funções que usam pop e push 
// binário de um numero 

let numDecimal = 10
let resto

while(numDecimal != 0){
    resto = parseInt(numDecimal % 2)
    push(resto)
    numDecimal = parseInt(numDecimal / 2)
    console.log(elementos)
    
}

while(!pilhaVazia()){
    console.log(pop())

}
