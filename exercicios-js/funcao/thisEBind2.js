function Pessoa() {
    this.idade = 0
    
    const self = this // técnica para driblar o this variante, não importa quem chame a função o self sempre vai apontar pra Pessoa
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa