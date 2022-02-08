function tratarErroELancar(erro){
    //thorw new Error('...')
    //throw 10
    //throw true
    //throw "mensagem"
    throw {//lança um erro msg ou obj
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{//usar try quando vc sabe que o cod pode  gerar erros
        console.log(obj.name.toUpperCase() + "!!!")//colocar name em letras maiusculas
    } catch (e) {//depois de try se gerar erro cai no catch
        tratarErroELancar(e)

    } finally {//sempre  chama o finaly no fim dando erro ou nao
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)