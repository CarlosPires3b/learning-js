
const prod1 = {} // {} forma literal de criar um objeto(objeto é uma coleção de pares: chave x valor)

prod1.nome = 'Celular Ultra Mega' // esse "nome" foi criado dinamicamente
prod1.preco = 4998.90 // esse "preco" foi criado dinamicamente
prod1['desconto Legal'] = 0.40 // evitar atributos com espaço

console.log (prod1)

// outra forma de fazer um objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

'{ "nome": "Camisa Polo", "preco": 79.90}' // JSON é um formato textual e objeto é uma coleção de chaves e valores, 
                                           //  apartir de um objeto pode ser gerado um JSON
console.log(prod2)