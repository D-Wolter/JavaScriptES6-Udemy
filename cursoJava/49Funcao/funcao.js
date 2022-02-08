function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)//5
imprimirSoma(2)//NaN
imprimirSoma(3,3,3,3,3)// so usa os dois primeiro o resto ignora
imprimirSoma()//NaN

//funcao c retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(2,3))//5
console.log(soma(2))//2 porque b por padrao eh zero, pode passarr um padrao ao a tambem