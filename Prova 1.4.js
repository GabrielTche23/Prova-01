let arrayOrdenado = []
let contador = 0
let valor = 0

console.log(OrdenarEmOrdemCrescente(valor))

function OrdenarEmOrdemCrescente(valoresParametro) {
    for (let index = 0; index < 3; index++){
        valor = parseInt(prompt("Digite 3 valores :"))
        arrayOrdenado[contador] = valor
        contador++
    }
    for (var atual = 0; atual < contador - 1; atual++) {
        let valorAux = arrayOrdenado[atual]
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            if (arrayOrdenado[atual] > arrayOrdenado[seguinte]) {
                arrayOrdenado[atual] = arrayOrdenado[seguinte]
                arrayOrdenado[seguinte] = valorAux
                
            }
        }
    }
    return arrayOrdenado
}