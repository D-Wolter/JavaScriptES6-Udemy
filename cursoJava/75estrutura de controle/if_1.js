function soBoa(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoa(8.1)
soBoa(6.1)

function iftrue(valor) {
    if(valor) {//verdaqdeiro ou falso
        console.log('Vero.. ' + valor)
    }

}


iftrue()
iftrue(null)
iftrue(undefined)
iftrue(NaN)
iftrue('')
iftrue(0)
iftrue(-1)
iftrue(" ")
iftrue('?')
iftrue([])
iftrue([1,2])
iftrue({})