let array = [4,6,2,8,9,3,16,5,13,20]
let arrayAux = []
let limiteInferior = parseInt(prompt("Digite um valor inferior:"))
let limiteSuperior = parseInt(prompt("Digite um valor superior:"))
let contador = 0;

console.log(ExibirValores(limiteInferior,limiteSuperior))

function ExibirValores(limiteInferiorparametro,limiteSuperiorparametro){
    for(let contador = 0; contador < array.length; contador++){
        for(let index = 0; index <contador; index++ ){
            if(array[contador] >= limiteInferiorparametro && array[contador] == limiteSuperiorparametro){
                arrayAux[contador] = array[contador]
                return arrayAux
            }
        }
    }
 
}