const peso1 = 1.0//se acabar em zero considera numero inteiro
const peso2 = Number('2.0')
const peso3 = 1.1// quando nao acaba em zero nao eh interio

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
// 1 2
// true
// true

console.log(Number.isInteger(peso3))//false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
//7.8709999999999996

console.log(media.toFixed(2))//determina duas casa decimais apos o ponto
//7.87 

console.log(media.toString())//retorna valor como sendo string

console.log(media.toString(2))//retorna uma string com o valor em cod binario