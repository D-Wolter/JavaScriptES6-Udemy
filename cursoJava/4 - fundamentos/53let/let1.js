//let alem de nao ficar visivel nas funcoes tambem nao e visivel em blocos e podem ter o mesmo nome 
//de variavel mas com resultados diferente

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)//numero encontrou no let entao nao continuou buscando chave acima
}
console.log('fora =', numero)