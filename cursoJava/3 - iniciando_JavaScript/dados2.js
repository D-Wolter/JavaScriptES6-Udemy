let preco = 19.90;
let desconto = 0.4;
// desconto de 40 porcento

console.log(19.90 * 0.6)//11.94

//                   parenteses vai ser prioridade  
console.log(preco * (1 - desconto));//11.94
//                   1 - 0.4 = 0.6
// multiplicacao tem prioridade entao 



let precocomdesconto = preco * (1 - desconto);
console.log(precocomdesconto)//11.94

let nome = 'caderno';
let categoria = 'Papelaria';
console.log(nome + ' ' + categoria)//caderno Papelaria