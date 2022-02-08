console.log(Math.ceil(6.1))//arredonda para cima 7

const obj1 = {}
obj1.nome = "bola"
obj1['nome'] = 'bola2'
console.log(obj1.nome)

function Obj (nome){
    this.nome = nome//criando atrituto publico dentro da funcao
    this.exec = function() {
        console.log('exec...')
    }
}

 const obj2 = new Obj('Cadeira')
 const obj3 = new Obj('mesa')
 console.log(obj2.nome)
 console.log(obj3.nome)
 obj3.exec()