const valores = [7.7, 9.9, 5.6, 8.4]
console.log(valores[0], valores[3])//7.7 8.4
console.log(valores[4])//undefined indice nao existe

valores[4] = 9.9
console.log(valores)//[ 7.7, 9.9, 5.6, 8.4, 9.9 ]

valores[10] = 1.1
console.log(valores)//[ 7.7, 9.9, 5.6, 8.4, 9.9, <5 empty items>, 1.1 ]

console.log(valores.length)//11

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
// [ 7.7,
//     9.9,
//     5.6,
//     8.4,
//     9.9,
//     <5 empty items>,
//     1.1,
//     { id: 3 },
//     false,
//     null,
//     'teste' ]

console.log(valores.pop())//retira o ultimo valor do array

delete valores[0]
console.log(valores)
// [ <1 empty item>,
//     9.9,
//     5.6,
//     8.4,
//     9.9,
//     <5 empty items>,
//     1.1,
//     { id: 3 },
//     false,
//     null ]
  

console.log(typeof valores)//object