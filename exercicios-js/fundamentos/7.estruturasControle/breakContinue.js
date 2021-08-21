const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// o break vai desviar o fluxo para fora do laço
// no bloco mais próximo dele, que nesse caso é o FOR
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// o continue vai desviar o fluxo para a proxima repetição 
// no bloco mais próximo dele, que nesse caso é o FOR
// porém não vai sair do laço, simplesmente interrompe aquela repetição em
// que o continue foi disparado
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
// rótulo
// NÃO USAR ESSA ESTRUTURA, DESORGANIZADO E DE DIFÍCIL MANUTENÇÃO
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
            console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim')