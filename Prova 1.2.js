let valor = parseInt(prompt("Digite um numero: "))


console.log(SomarValor(valor))

function SomarValor(valorParametro){
    let soma = 0;
    for (let contador = 0; contador < valor; contador++){
        somaContador = contador + 1
        soma = soma + somaContador
   }
    return  soma
}