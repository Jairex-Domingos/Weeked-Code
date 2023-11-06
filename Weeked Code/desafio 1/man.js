    

function calcular() {

    var nota1 = document.getElementById('numero1')
    var nota2 = document.getElementById('numero2')
    var nota3 = document.getElementById('numero3')
    var respostas = document.getElementById('resultados')
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)

        let media = (n1 + n2 + n3)/3

        respostas.innerHTML ="A media do aluno é: " + media;

        if(media < 10){
            respostas.innerHTML+="O Aluno está REPROVADO"
        }else{
            respostas.innerHTML+=" \n \n O Aluno está APROVADO"

        }
    


}