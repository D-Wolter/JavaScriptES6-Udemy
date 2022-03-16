//Destructuring retirar atributos de dentro de objetos
const pessoa = {
    nome: ' Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 30,
    }
}

const {nome, idade} = pessoa
//funcao destructuring const{atributo1,atributo2} = nomeobjeto

console.log(nome, idade)//ana 5

 //reduzir chave dos atributos
 const { nome: n, idade: i } = pessoa
 console.log(n,i)//ana 5

 const { sobrenome, bemHumorado = true } = pessoa
 console.log(sobrenome, bemHumorado)//undefined true

 const { endereco: { logradouro, numero, cep }} = pessoa
 console.log(logradouro, numero, cep)//rua abc 30 undefined