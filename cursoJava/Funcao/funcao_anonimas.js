const soma = function (x, y) {
    return x + y
}

const imprimirresultado = function(a, b, operacao = soma) {
    console.log(operacao(a,b))//7
}

imprimirresultado(3, 4)//7
imprimirresultado(3, 4, soma)//7
imprimirresultado(3, 4, function (x, y) {
    return x - y//-1
})

imprimirresultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('opa')
    }
}

pessoa.falar()//opa