const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola: () => 'Kelvin Marques',
    horaAtual: () => new Date,
    usuarioLogado: () => {
        return {
            id: 1,
            nome: 'Kelvin Marques',
            email: 'kelvin.marques@gmail.com',
            idade: 28,
            salario_real: 1256.20,
            vip: true
        }
    },
    produtoEmDestaque: () => {
        return {
            nome: 'Notebook',
            preco: 1280
        }
    },
    numerosMegaSena: () => {
        const crescente = (a, b) => a - b;
        let array = []

        while (array.length < 6) {
            array.push(parseInt(Math.random() * 60 + 1))
            array = array.filter((n, i) => array.indexOf(n) === i)
        }

        return array.sort(crescente)
    },
    usuarios: () => usuarios,
    usuario: (object, { id }) => usuarios.filter(u => id === u.id)[0] || null,
    perfis: () => perfis,
    perfil: (object, { id }) => perfis.filter(p => id === p.id)[0] || null
}