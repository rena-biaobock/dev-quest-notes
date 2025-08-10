'use strict'

console.log(window)

this.name = 'User'

function saudar() {
    console.log(this.name)
}

// saudar()

let usuario = {
    nome: 'User',
    saudar: function () {
        console.log('olá, ' + this.nome + '!')
    }
}

usuario.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function (temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)