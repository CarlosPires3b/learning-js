const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // = 'Bomdia!
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO = undefined

const falarDePessoa = pessoa.falar.bind(pessoa) // amarra determinado objeto pra ser dono de execução de um método = 'Bomdia!

falarDePessoa()