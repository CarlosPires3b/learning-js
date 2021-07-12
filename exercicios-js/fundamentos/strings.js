const escola = "Cod3r"

console.log(escola.charAt(4)) // = Chama o caractere que está no indice 4 dentro da string, começando com 0 1 2 3...
console.log(escola.charAt(5)) // = retorna um valor vazio

console.log(escola.charCodeAt(3)) // = pega o valor dentro da tabela uniCode do caractere que está no indice 3 da string
console.log(escola.indexOf('r')) // = vai trazer o indice especifico que esta o caractere que vc especificou no indexOf

console.log(escola.substring(1)) // = tira o caractere que vc especificou e imprime o resto da string
console.log(escola.substring(0, 3)) // = parte do indice 0 e vai até o indice 3 não incluindo o indice 3

console.log('Escola '.concat(escola).concat("!")) // = concatena strings
console.log('Escola ' + escola + "!") // = também concatena

console.log(escola.replace(3, 'e')) // = substui letras, ele pega o indice 3 e substitui por 'e'
console.log(escola.replace(/\w/g, 'e')) // = regular expression(regex) substitua todos os digitos pela letra 'e'

console.log('Stephani,Carlos,Leonidas'.split(',')) // = gera um array com 3 elementos independentes a partir de umas string

let nota1 = 9
let nota2 = 10
let nota3 = 8
let media = (nota1 + nota2 + nota3) / 3

console.log(media)