//destructuring retirar atributos de um array
const [a] = [10]
console.log(a)//10

const [n1, , n3, , n5, n6 = 0 ] = [10, 7, 9 ,8]
//index0  1  2  3  4    5           0  1  2  3
console.log(n1, n3, n5, n6)//10 9 undefined 0

const [, [,nota]] = [[,8, 8], [9, 6, 8]]
//index0  0  1      00 1  2  1 0  1  2

console.log(nota)