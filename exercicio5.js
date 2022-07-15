/* Exercicio 5 = Retornar o maior valor. */

/* function maiorValor (valor1, valor2, valor3){

    if (
        valor1 > valor2 && valor1 > valor3
    ) {
        console.log(`${valor1} é o valor maior`)
    }
    
    else if (
        valor2 > valor1 && valor2 > valor3
    )
        {console.log(`${valor2} é o valor maior`)}
    
    else if (
        valor3 > valor1 && valor3 > valor2
    )
    {
        console.log(`${valor3} é o valor maior`)
    
    }
   
} 

maiorValor(65,13,87)*/


function maiorValor(valor1, valor2, valor3) {

    var resultado = valor1

    if (valor2 > resultado) {
        resultado = valor2
    }

    if (valor3 > resultado) {
        resultado = valor3
    }

    return resultado

}


console.log(`Maior valor é ${maiorValor(21, 32, 2)}`);