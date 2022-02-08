//factory simples (fabrica de objetos)

function criarPessoa() { 
    return {
        nome: 'ana',
        sobrenome: 'silvva'
    }
}

console.log(criarPessoa())//{ nome: 'ana', sobrenome: 'silvva' }

// criar produto

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.99))//{ nome: 'Notebook', preco: 2199.99, desconto: 0.1 }
console.log(criarProduto('ipad', 1199.99))//{ nome: 'ipad', preco: 1199.99, desconto: 0.1 }