console.log(module.exports === this)// true  this faz referencia ao module exports
console.log(module.exports === exports)


 // a variavel a sera vista fora do arquivo
this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)

//const exportar = require('./exportar')