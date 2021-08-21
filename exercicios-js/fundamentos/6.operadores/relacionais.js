console.log('01)', '1' == 1) // == relacional, compara o valor (true)
console.log('02)', '1' === 1) // === relacional, compara se os tipos são estritamente iguais (false)
console.log('03)', '3' != 3) // != relacional, compara se os valores são diferentes (false)
console.log('04)', '3' !== 3) // !== relacional, compara se os tipos são estritamente diferentes (true)

console.log('05', 3 < 2) // < relacional, 3 é menor que 2? (false)
console.log('06', 3 > 2) // > relacional, 3 é maior que 2? (true)
console.log('07', 3 <= 2) // <= relacional, 3 é menor ou igual a 2? (false)
console.log('08', 3 >= 2) // >= relacional, 3 é maior ou igual a 2? (true)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2) // === relacional, nesse caso vai comparar endereços de memória,
                             // sendo uma variavel de referência de memória, portanto o resultado
                             // vai ser (false)
console.log('10', d1 == d2)  // == relacional, vai ter exatamente o mesmo resultado que a probabilidade de cima
console.log('11', d1.getTime() === d2.getTime()) // == relacional, nesse caso vou comparar um number, portanto 
                                                // podem ser estritamente iguais (true)
console.log('12', undefined == null) // == relacional, vai dar (true)
console.log('13', undefined === null) // === relacional, o tipo undefined é estritamente igual ao tipo null? (false)