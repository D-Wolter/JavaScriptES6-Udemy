const escola = "Cod3r"

console.log(escola.charAt(4))//retorna o indice 4
console.log(escola.charAt(5))//indice nao existe mas nao retorna erro
console.log(escola.charCodeAt(3))// mosta o valor na tabela unicode 51
console.log(escola.indexOf('3'))//vai mostrar o indice que o carcter 3 da string esta
console.log(escola.substring(1))//exibir a partir do indice 1 od3r
console.log(escola.substring(0, 3))// exibir do imdice 0 ao 3 carcteres

console.log('escola '.concat(escola).concat("!"))//escola Cod3r!
console.log('escola ' + escola + "!")//escola Cod3r!

console.log(escola.replace('o', '@'))//substituir letra C@d3r
console.log(escola.replace(3, '%'))//Cod%r

console.log(escola.replace(/\d/, '*'))//subistituir todos os digitos numericos pela letra */
console.log(escola.replace(/\w/g, '*'))//substitui todas as letras e numeros em *

console.log('Ana,Maria,Pedro')//Ana,Maria,Pedro
console.log('Ana,Maria,Pedro'.split(','))//gera array [ 'Ana', 'Maria', 'Pedro' ]

console.log('Ana,Maria,Pedro'.split(/,/))//gera array 