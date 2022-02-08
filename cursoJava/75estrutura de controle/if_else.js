Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const sentenca = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Invalida')
    }
    console.log('fim')
} 
  
sentenca(10)
sentenca(8.9)
sentenca(6.55)
sentenca(2.3)
sentenca(-1)
sentenca(11)
