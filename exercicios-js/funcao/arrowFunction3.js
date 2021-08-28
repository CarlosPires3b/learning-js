
// dentro do contexto de execução do node ele aponta pro objeto global
//
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // = de fato o this aponta pro global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)