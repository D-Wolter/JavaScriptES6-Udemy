for (var i = 0;i < 10; i++) {
    console.log(i)
}
console.log('i =', i)//i = 10

///////////

for (let a = 30;a < 40; a++) {
    console.log(a)
}
//console.log('a =', a)Error: a is not defined(let nao eh visiveldentro do laco for)

//////////////////////////////////////////////////////////////////////////////////////

const funcs = []

for (var g = 50; g < 60; g++) {
    funcs.push(function(){
        console.log(g)
    })
}
funcs[2]()//60
funcs[8]()//60
console.log(funcs)

//////////////////


const funcs = []

for (let g = 50; g < 60; g++) {
    funcs.push(function(){
        console.log(g)
    })
}
funcs[2]()//52
funcs[8]()//58
