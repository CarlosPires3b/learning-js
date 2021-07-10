

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // se por duas exclamações ele volta pro estado atual true / false
console.log('----------//----------')

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // so um espaço já resolve pra true
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log('----------//----------')

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // string vazia ou sem espaço resolve pra false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // se for falso do lado direito, vai resolver pra false
console.log('----------//----------')

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // uma das condições tem que se verdadeira


let nome = 'Lucas'

console.log(nome || 'Desconhecido') // operação logica com strings, é algo comum no javascript...