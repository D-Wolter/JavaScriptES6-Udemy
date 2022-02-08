//Funcoes de Number

let a = 'legal'
console.log(typeof a)

const peso = 1.0
const peso2 = Number(2.1)//funcao Number
console.log(typeof peso)//verificando tipo de dado
console.log(Number.isInteger(peso2))// verificar se é numero inteiro

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)// criando media de peso

console.log(media.toFixed(2))//fixar duas casas decimais apos ponto
console.log(media.toString())//retorna string
console.log(media.toString(2))//retorna em numero binario

