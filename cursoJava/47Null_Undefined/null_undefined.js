//objetos sao atribuicao por referencia de enderecço

const a = {name: 'treste'}

const b = a//associo o mesmo endereço a b

b.name = 'ola'//muda no endereço de b e a

console.log(a)//ola

let c = 3
let d = c//armazena o valor de c
d++//incrementar um 
console.log(d)//4
console.log(c)//3

let valor //nao iniciada 
console.log(valor)//undefined
//console.log(chavedesconhecida)// not defined

valor = null// ausencia de valor//devemos usar null e nao undefined
console.log(valor)//null 
//console.log(valor.toString())//se tentar converter em string e algum valor for null quebra o codigo

const produto = {}
console.log(produto.preco)//undefined
//console.log(produto.preco.a)//quebra Cannot read property 'a' of undefined
console.log(produto)//{}

produto.preco = 3.50
console.log(produto)//{ preco: 3.5 }

produto.preco = undefined // evite usar undefined
console.log(!!produto.preco)//false 
console.log(produto)//{ preco: undefined }
delete produto.preco
console.log(produto)//{}

produto.preco = null //sem preco
console.log(!!produto.preco)//false
console.log(produto)//{ preco: null }




