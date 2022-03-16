//estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1 
    c = c || 1
    return a + b + c
}

console.log(soma1())//3
console.log(soma1(3))//5
console.log(soma1(1,2,3))//6
console.log(soma1(0,0,0))//3


//segunda estrategia de escrever o valor padrao
function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1//se holver indice 1 em arguments assumir valor de b ou 1

    c = isNaN(c) ? 1 : c//estrategia melhor (se nao for NaN passar valor padro 1 senao passar valor c)
    return a + b + c
}


console.log(soma2())//3
console.log(soma2(5))//7
console.log(soma2(5,6,7))//18
console.log(soma2(0,0,0))///0


//valor padrao es2015
function soma3(a=1,b=1,c=1){
    return a+b+c
}

console.log(soma3())//3
console.log(soma3(5))//7
console.log(soma3(5,6,7))//18
console.log(soma3(0,0,0))///0