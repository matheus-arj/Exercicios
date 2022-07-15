/* Exercicio 4 */

function mediaAluno (nota1, nota2){

    var media = (nota1 + nota2) /2

    if (media >= 6) {
        return "Aluno Aprovado"
    }
    
    else {
        return "Aluno Reprovado"
    }
}

console.log(mediaAluno(7,8))



