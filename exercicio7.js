/* exercicio 7 = Retornar o menor valor. */

function menorValor(valor1, valor2, valor3) {

var resultado = valor1

if (valor2 < resultado) {
    resultado = valor2
}
if (valor3 < resultado) {
    resultado = valor3
}

    return resultado
}

console.log(`Menor valor é ${menorValor(21, 32, 2)}`);