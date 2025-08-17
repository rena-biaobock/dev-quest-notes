function mensagens (mensagem1, ...mensagens) {
    mensagens.map(mensagem2 => console.log(`${mensagem1} ${mensagem2}`))
}

mensagens('mensagem1', 'mensagem2', 'mensagem3', 'mensagem4')