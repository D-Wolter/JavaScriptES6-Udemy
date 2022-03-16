//ternario comecça com arow => (mais a expressao que ser de verdadeiro ou falso) ? (primeira parte retorna quando verdadiro) :  (segunda quando falsa)

//funcao arow com corpo operacao ternaria
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(7.1))//Aprovado
console.log(resultado(6.1))//Reprovado

//operador ternario com funcçao arow reduzido
const resultado2 = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado2(7.1))//Aprovado
console.log(resultado2(6.1))//Reprovado

const resultado3 = nota => nota >= 7 ? true : false

console.log(resultado3(6.1))//false