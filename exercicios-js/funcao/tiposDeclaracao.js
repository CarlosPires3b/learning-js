// antes mesmo de ter a function declarada eu já posso
// chamar ela no exemplo de function declaration
console.log(soma(3, 4))

// function declaration - interpretador do js carrega todas as funções desse tipo, antes de executar o código
function soma(x, y) {   // você consegue chamar essa função antes mesmo dela ter sido declarada
    return x + y
}

// function expression 
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))