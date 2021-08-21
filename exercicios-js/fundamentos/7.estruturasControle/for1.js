// diferença entre um WHILE pra um FOR
let contador = 1 // declaração de uma variável
while (contador <= 10) { // expressão
    console.log(`contador = ${contador}`)
    contador++ // incremento
}

// 3 elementos que compõe um FOR / declaração / expressão / incremento
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}