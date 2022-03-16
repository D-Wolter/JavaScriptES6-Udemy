//funcao normal
let dobro = function (a) {
    return 2 * a
}

//funcao arrow
dobro = (a) => {
    return 2 *a
}

//funcao arrow de uma unica sentença reduzida sem corpo

dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

///

let ola = function (){
    return 'Ola'
}

