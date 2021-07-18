console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // outra forma de inserir valor
                          // a uma chave de um obj de forma dinamica
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // recebe o atributo nome como parametro e atribuir a this.nome 
                     // e ele ficará visível para quem criar ou instaciar um objeto do tipo obj
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()