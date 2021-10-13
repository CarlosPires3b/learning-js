
const soma = function(x,y) {
    return x + y
}

const imprimirResultado = function(a,b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()

const subtracao = function(x, y) {
    return x - y
}

const imprimeResult = function(a, b, resultado = subtracao) {
    console.log(resultado(a, b))
}

imprimeResult(10, 5)

const divideOperador = function(x = 20, y = 2) {
    return x / y
}

const imprimeResultaa = function(a, b, resultado = divideOperador) {
    console.log(resultado(a, b))
}

imprimeResultaa()