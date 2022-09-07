let valorA = prompt("Digite um valor: ")
let valorB = prompt("Digite outro valor: ")

console.log(RetornarValorLogico(valorA,valorB))

function RetornarValorLogico(parametroA,parametroB){
    if (parametroA % 2 == 0 && parametroB > 5){
        return "true"
    }
    else {
        return "false"
    }
}