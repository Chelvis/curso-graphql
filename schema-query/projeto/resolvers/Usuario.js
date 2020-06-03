const { perfis } = require('../data/db')

module.exports = {
    salario: usuario => usuario.salario_real,
    perfil: usuario => perfis.filter(p => p.id === usuario.perfil_id)[0] || null
}