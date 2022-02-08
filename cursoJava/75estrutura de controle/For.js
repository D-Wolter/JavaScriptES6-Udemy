let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}/*
contador = 1
contador = 2
contador = 3
contador = 4
contador = 5
contador = 6
contador = 7
contador = 8
contador = 9
contador = 10
*/

//mesmo codigo em for

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}
/*
i = 1
i = 2
i = 3
i = 4
i = 5
i = 6
i = 7
i = 8
i = 9
i = 10
*/

const clientes = ['dani', 'luana', ' tiago', 'gabriel']
for(let i = 0; i < clientes.length; i++) {
    console.log(`clientes = ${clientes[i]}!`)
}
/*
clientes = dani!
clientes = luana!
clientes =  tiago!
clientes = gabriel!
*/