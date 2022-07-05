function mensagem(){
    if (window.screen.width <= '575'){
        document.getElementById('inputMensagem').style.width = '200px'
    }else{
        document.getElementById('inputMensagem').style.width = '400px'
    }
}