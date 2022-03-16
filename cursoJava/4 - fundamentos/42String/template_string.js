const nome = 'Rebeca'
const concatenacao = 'ola ' + nome + '!'

const template = `
     Ola
     ${nome}!`
console.log(concatenacao, template)
// ola Rebeca! 
//      Ola
//      Rebeca!
//template string permite quebra as linhas e exibir como quiser

//expressoes..
console.log(`1 + 1 = ${1 + 1}`)//1 + 1 = 2

const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}`)//Ei.. CUIDADO