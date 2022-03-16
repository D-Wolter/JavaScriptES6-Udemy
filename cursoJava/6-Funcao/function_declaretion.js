console.log(soma(3, 4))
//console.log(sub(5, 4))
//console.log(mult(3, 4))

//function declaration (dessa forma da pra puxar a funcao nas linhas antes da funcao)
function soma(x, y) {
    return x + y
}


//function expression (funcao anonima)
const sub = function (x, y) {
    return x - y
}

//named function expression (funcao nomeada)

const mult = function mult(x, y) {
    return x * y
}