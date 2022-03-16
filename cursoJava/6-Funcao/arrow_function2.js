function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)//incrementa o valor da idade a cada segundo
}

new Pessoa