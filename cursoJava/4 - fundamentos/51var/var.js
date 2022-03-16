//var fica visivel fora do escopo dentro desses objeto
{
    {
        {
            {
                 var sera = 'sera!'
                 console.log(sera)

            }
        }
    }

}

console.log(sera)

function teste() {
    var local = 234
    console.log(local)//234)
}

teste()//234
//console.log(local)//quebra codogo, var nao pode ser acessado dentro do escopo de 

//como abaixo nao eh funcao o var fica visivel no escopo global

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) 
// dentro = 2
// fora = 2