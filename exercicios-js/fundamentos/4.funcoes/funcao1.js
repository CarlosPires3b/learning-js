// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
function subtracao(a, b) {
    return a - b
}

function imprime(a = subtracao) {
    console.log(subtracao(6, 2))
}

imprime()

imprimirSoma(2, 3) // soma
imprimirSoma(2) // NaN(Not a Number)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // pega os dois primeiros números, soma e ignora o resto
imprimirSoma() // NaN(Not a Number)

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) // soma
console.log(soma(2)) // 3
console.log(soma()) // NaN