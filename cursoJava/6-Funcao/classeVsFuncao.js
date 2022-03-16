class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome e ${this.nome}`)
    }


}

const p1 = new Pessoa('joao')
p1.falar()//meu nome e joao

const criarpessoa = nome => {
    return {
        falar: () => console.log(`meu nome e ${nome}`)
    }
}

const p2 = criarpessoa('maria')
p2.falar()//meu nome e maria