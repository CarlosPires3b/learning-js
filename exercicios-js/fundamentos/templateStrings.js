

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
     Olá
    ${nome}!` // interpolação
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) // so vai interpretar oq tem dentro das chaves

const up = texto => texto.toUpperCase() // função do proprio javascript, vai deixar a string em letra maiuscula
console.log(`Ei... ${up('cuidado')}!`)