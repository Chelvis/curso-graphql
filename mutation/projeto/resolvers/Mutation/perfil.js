const { perfis, proximoIdPerfil } = require('../../data/db')

const noProfileError = () => new Error('Perfil já não consta na base de dados.')

const profileIndex = filtro => {
    if (!filtro) { return -1 }
    const { id, nome } = filtro
    if (id) {
        return perfis.findIndex(p => p.id === id)
    } else if (nome) {
        return perfis.findIndex(p => p.nome === nome)
    }
    return -1
}

module.exports = {
    novoPerfil(_, { dados }) {
        if (perfis.some(u => u.nome === dados.nome)) {
            throw new Error('Perfil já cadastrado!')
        }
        const novo = {
            id: proximoIdPerfil(),
            ...dados
        }
        perfis.push(novo)
        return novo
    },
    excluirPerfil(_, { filtro }) {
        const i = profileIndex(filtro)
        if (i < 0) { throw noProfileError() }
        return perfis.splice(i, 1)[0] || noUserError()
    },
    alterarPerfil(_, { filtro, dados }) {
        const i = profileIndex(filtro)
        if (i < 0) { throw noProfileError() }
        const perfil = {
            ...perfis[i],
            ...dados
        }

        perfis.splice(i, 1, perfil)
        return perfis[i]
    }
}