
function rand({ min = 0, max = 1000}) {              // vou passar um objeto pra essa função     
    const valor = Math.random() * (max - min) + min  // e dentro da minha função randomica
    return Math.floor(valor)                         // em vez de acessar objeto.min ou objeto.max com notação ponto
}                                                    // eu quero que tire de dentro do objeto esses dois atributos prontos

const obj = { max: 100, min: 0}
console.log(rand(obj)) // vai pegar os valores que você passou na constante
console.log(rand({ min: 0}))
console.log(rand({})) // vai pegar o valor padrão da função randomica
console.log(rand()) // undefined ou null
                                                          