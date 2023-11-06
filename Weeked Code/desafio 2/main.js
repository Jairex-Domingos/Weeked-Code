function verificar(){
    var numero=document.getElementById('numero').value
    var resultados=document.getElementById('resultados')

    if(numero<0){
    resultados.innerHTML=`O número ${numero} é Negativo`
    }else if(numero>0){
        resultados.innerHTML=`O número ${numero} é Positivo`
        }
}