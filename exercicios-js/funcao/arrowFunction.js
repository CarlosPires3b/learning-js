// exemplo de function
let dobro = function(a) {
    return 2 * a
}

// reescrevendo a function acima como arrow function, arrow functions sempre são anonimas(tem que armazenar elas dentro de uma variável)
dobro = (a) => {
    return 2 * a
}

// arrow function de única linha
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())

let soma = (a, b) => {
    return a + b
}

console.log(soma(5, 2))

let subtracao = (a, b) => {
    return a - b
}

let divisao = (a, b) => {
    return a / b
}

let imprimir = ( a = divisao) => {
    console.log(a(12, 2))
}

imprimir()
console.log(subtracao(2, 2))