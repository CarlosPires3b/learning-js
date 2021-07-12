let valor // declarada, porém, não inicializada
console.log(valor)
// console.log(valor2) // não declarada e not defined

valor = null // inicializada, porém não aponta pra nenhum endereço de memória, ausência de valor
console.log(valor)
// console.log(valor.toString()) // você não pode acessar algo de uma variavel que está null ou undefined, pois vai dar "ERRO!"

const produto = {}
console.log(produto.preco) // undefined
console.log(produto) // vazio {}

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir de forma explícita undefined
console.log(!!produto.preco)
// delete produto.preco // dessa forma vc tira o atributo de um object
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)