const imprimiR = function(nota) {
    if(nota >= 7) {
        console.log('aprovado')
    } else { 
        console.log('reprovado')
    }
}

imprimiR(10)//aprovado
imprimiR(4)//reprovado
imprimiR('ola')//reprovado cuidado fracamente tipada