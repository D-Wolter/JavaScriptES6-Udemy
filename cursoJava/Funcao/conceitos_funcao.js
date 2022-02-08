//Função em JS é First_Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() { }

//armazenar funcao em uma variavel
const fun2 = function() { }

//Armazenar funcao em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))
//5


//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())
//Opa

//uma funcao pode retornar/ conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b +c)
    }
}

soma(2, 3)(4)
//9


const cincomais = soma (2,3)
cincomais(9)
//14