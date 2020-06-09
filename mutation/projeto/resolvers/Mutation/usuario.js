const { usuarios, proximoId } = require('../../data/db')

const noUserError = () => new Error('Usuário já não consta na base de dados.')
const userIndex = filtro => {
    if (!filtro) {return -1}
    const {id, email} = filtro
    if(id) {
        return usuarios.findIndex(u => u.id === id)
    } else if (email) {
        return usuarios.findIndex(u => u.email === email)
    }
    return -1
}

module.exports = {
    novoUsuario(_, {dados}) {
        if (usuarios.some(u => u.email === dados.email)) {
            throw new Error('E-mail já cadastrado!')
        }
        const novo = {
            id: proximoId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, { filtro }) {
        const i = userIndex(filtro)
        if (i < 0) { throw noUserError() }
        return usuarios.splice(i, 1)[0] || noUserError()
    },
    alterarUsuario(_, {filtro, dados}) {
        
        const i = userIndex(filtro)
        if (i < 0) { throw noUserError() }

        const usuario = {
            ...usuarios[i],
            ...dados
        }

        usuarios.splice(i, 1, usuario)
        return usuarios[i]
    }
}