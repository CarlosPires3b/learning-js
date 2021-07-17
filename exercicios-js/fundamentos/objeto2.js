console.log(typeof Object) // tudo é função no js
console.log(typeof new Object) // Objeto criado a partir de uma função

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // tudo é função no js
console.log(typeof new Produto) // Objeto criado a partir de uma função