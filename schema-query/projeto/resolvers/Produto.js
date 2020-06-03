module.exports = {
    precoComDesconto: produto => produto.preco * (1 - produto.desconto || 1)
}