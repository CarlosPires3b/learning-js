// novo recurso do ES2015

const pessoa = {
    nome: 'Marlos',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // operador destructuring: extrai os 
                               // atributos de um objeto e transforma em variáveis
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // pegar os atributos do objeto,
                                     // tornar-los variaveis e alterar o nome deles
console.log(n, i)


const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // cep: atributo não existe dentro de pessoa, logo vai retornar undefined

const { conta: { ag, num } } = pessoa // desestruturar um dado alinhado, 
                                      // o caminho até o dado deve estar livre, 
                                      // portanto, não da pra desestruturar um filho de um dado
                                      // vai retornar erro
console.log(ag, num)