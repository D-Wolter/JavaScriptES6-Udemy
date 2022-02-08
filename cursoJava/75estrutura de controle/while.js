//while - repeticoeas indeterminadas vezes
//for - repetoicoes determinadas vezes
//switch - selecçao multipla
// if else -

function getInteiroEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Ate a Proxima!')
