const usuarios = [
    {
        id: 1,
        nome: 'Kelvin Marques',
        email: 'kelvin.marques@email.com',
        idade: 28,
        perfil_id: 2,
        status: 'ATIVO'
    },
    {
        id: 2,
        nome: 'Amy Winehouse',
        email: 'amy@email.com',
        idade: 27,
        perfil_id: 1,
        status: 'INATIVO'
    },
    {
        id: 3,
        nome: 'Kurt Cobain',
        email: 'kurt@email.com',
        idade: 27,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
]

const perfis = [
    {
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
]

module.exports = { usuarios, perfis }