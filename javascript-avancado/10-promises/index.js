let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('fervendo a água')
            resolve()
        } else {
            console.log('ligue o fogão e coloque a chaleira no fogao')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')