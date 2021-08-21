function rand([min = 0, max = 1000]) { // depois que você desestruturou você recebe 2 atributos e não um array
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10])) // undefined
console.log(rand([])) // undefined
// console.log(rand()) // undefined