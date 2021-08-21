let num1 = 1
let num2 = 2

num1++ // prioridade menor
console.log(num1)
--num1 // prioridade maior
console.log(num1)

console.log(++num1 === num2--) // só depois da comparação é decrementado o valor de num2--, 
                               // por conta do operador unário pos-fixado(num2--)
console.log(num1 === num2)