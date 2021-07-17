// par chave/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2, porém mais restrito
    return saudacao
}

// Objetos são coleções de pares chave/valor
const cliente = {
    nome: 'Carlos',
    idade: 20,
    peso: 102,
    endereco: {
        logradouro: 'Amazonas',
        numero: 4040,
        bairro: 'Garcia',
        complemento: 'Apto 116'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)