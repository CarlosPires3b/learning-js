console.log('a =', a) // undefined
var a = 2 // esse é o efeito de içamento
console.log('a =', a) // 2

console.log('b =', b) // vai dar erro quando é utilizado o let, 
let b = 2             // pois o hoisting não funciona com let
console.log('b =', b)