let isativo = false
console.log(isativo)//false

isativo = true
console.log(isativo)//true

isativo = 1
console.log(!!isativo)//true

console.log(!isativo)//false

//verdadeiros
console.log('verdadeiro')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isativo = true))


//false
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false)) 

console.log(!!('' || null || 0 || ' '))//true

let nome = ''//mandou sem nome
console.log(nome || 'desconhecido')//como deu falso valor do nome imprimiu desconhecido