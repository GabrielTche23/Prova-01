let valor = prompt("Digite um valor:")

console.log(RetornarValorLogico(valor))

function RetornarValorLogico(valorParametro){
    if(valorParametro % 2 == 0){
        return "true"
    }
    else {
        return "false"
    }
}