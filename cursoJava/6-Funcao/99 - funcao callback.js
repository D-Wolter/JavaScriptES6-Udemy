const fabricantes = ["mercedes","audi","bmw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)   //forEach é uma funcao para array que passa nome e indice
//1. mercedes
//2. audi
//3. bmw

fabricantes.forEach(function(a,b) {
    console.log(a,b)
})
//mercedes 0
//audi 1
//bmw 2





//parte2
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)
//[ 6.5, 5.2, 3.6 ]



//com callback
let notasBaixas2 = []
notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})  // funcao filter de array vai retorna se verdadeiro
console.log(notasBaixas2)

//arow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
//outra forma com funcao separada do arrow
const abaixoMedia = nota => nota < 7 
const notasBaixas4 = notas.filter(abaixoMedia)
console.log(notasBaixas3)
