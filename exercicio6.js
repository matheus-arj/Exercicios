/* Exercicio 6 */
function verificaVogal(letra) {
    letraMaiuscula = letra.toUpperCase()
if (
    letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
    
    return true
} else {
    return false
}
}


console.log(verificaVogal("c"))