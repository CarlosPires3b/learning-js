
const valores = [7.7, 8.9, 6.3, 9.2 ] // indices 0, 1, 2, 3 //
console.log(valores[0], valores[3]) // 7.7 9.2 //
console.log(valores[4]) // acessando um indice inexistente = undefined //


valores[4] = 10 // adicionando um elemento a um array //
console.log(valores)
console.log(valores.length) // quantos elementos temos no array? // 

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // vai deletar o ultimo elemento do array //
delete valores[0] // removendo o elemento do indice 0 //
console.log(valores)

console.log(typeof valores) // = tipo object //
