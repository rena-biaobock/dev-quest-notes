let usuario = {
    nome: 'User',
    excluir: function () {
        console.log('O usuário ' + this.nome + ' foi excluído.')
    }
}

usuario.excluir()