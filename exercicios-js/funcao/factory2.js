function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log('---------------------------')
console.log('PRODUTOS')
console.log('---------------------------')
console.log(criarProduto('macBook', 9999.49))
console.log(criarProduto('Ipad', 3500.49))
console.log(criarProduto('iphone', 7347.49))
console.log(criarProduto('iMac', 15380.49))

function criarPessoa(nome, raca, sexo, idade) {
    return {
        nome,
        raca,
        sexo,
        idade
    }
}

function criarPessoa2(nome, sexo) {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sexo = sexo

    return pessoa
}

let pessoa1 = criarPessoa2('Carlos', 'M')
let pessoa2 = criarPessoa2('Stefan', 'M')
let pessoa3 = criarPessoa2('Kaue', 'F')
console.log('---------------------------')
console.log('Homies')
console.log('---------------------------')
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)

console.log('---------------------------')
console.log('PESSOAS')
console.log('---------------------------')
console.log(criarPessoa('Carlos', 'Pardo', 'M', 20))
console.log(criarPessoa('Stephani', 'Branca', 'F', 21))
console.log(criarPessoa('Denise', 'Negra', 'F', 63))
console.log(criarPessoa('Leandro', 'Branco', 'M', 60))

function criarCarro(modelo, marca, cor, tipo) {
    return {
        modelo,
        marca,
        cor,
        tipo
    }
}

console.log('---------------------------')
console.log('CARROS')
console.log('---------------------------')
console.log(criarCarro('911', 'Porsche', 'Branco', 'Sedan'))
console.log(criarCarro('A45', 'BMW', 'Violeta', 'Hatch'))
console.log(criarCarro('AMG', 'Mercedes', 'Prata', 'Sport'))
console.log(criarCarro('SW4', 'Toyota', 'Preto', 'Utilitario'))