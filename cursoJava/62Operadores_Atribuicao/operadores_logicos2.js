//operacao logica do tipo I, duas condicoes &&
//operacao logica do tipo ou ||

function compras(pagamenmtoL, pagamentoW) {
    const comprarAerofolio = pagamenmtoL || pagamentoW   //se om dos dois
    const comprarPneus = pagamentoW && pagamenmtoL       // se os dois(se o primeiro for falso nem olha o segundo)
    const comprar1Pneu = pagamentoW != pagamenmtoL       // se os dois forem diferente um vai ser verdadeiro
    const comprarRedemdio = !comprarAerofolio

    return {comprarAerofolio, comprarPneus, comprar1Pneu, comprarRedemdio}
}

//console.log(compras(true, true))

//comprarAerofolio: true,
//comprarPneus: true,
//comprar1Pneu: false,
//comprarRedemdio: false
  
  
//console.log(compras(true, false))
//comprarAerofolio: true,
//comprarPneus: false,
//comprar1Pneu: true,
//comprarRedemdio: false

//console.log(compras(false, true))
//comprarAerofolio: true,
//comprarPneus: false,
//comprar1Pneu: true,
//comprarRedemdio: false

console.log(compras(false, false))
//comprarAerofolio: false,
//comprarPneus: false,
//comprar1Pneu: false,
//comprarRedemdio: true