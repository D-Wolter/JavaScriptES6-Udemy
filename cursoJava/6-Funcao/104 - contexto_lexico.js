const valor = 'global'

function minhaFuncao() {
    console.log(valor)
}

minhaFuncao()//global

function exec() {
    const valor = 'local'
    minhaFuncao()//global
    console.log(valor)//local
}

exec()