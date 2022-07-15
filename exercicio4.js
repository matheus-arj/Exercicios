/* Exercicio 4 = Retornar a média de um Aluno. */

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



