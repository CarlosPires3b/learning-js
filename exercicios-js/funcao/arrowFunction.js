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