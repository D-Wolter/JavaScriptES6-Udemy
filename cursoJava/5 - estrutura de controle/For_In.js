const notas = [6.7, 7.4, 9.8, 8.2, 5.6]

for (let i in notas) {
    console.log(i, notas[i])
}
/*
0 6.7
1 7.4
2 9.8
3 8.2
4 5.6
*/

const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Wolter',
    idade: 40,
    peso: 70,
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
/*
nome = Daniel
sobrenome = Wolter
idade = 40
peso = 70
*/