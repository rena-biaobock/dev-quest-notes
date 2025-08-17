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
let fogaoEstaLigado = true

let passarCafe = () => console.log('passando café')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(() => {
        return passarCafe();
    })
    .then(() => {
        return console.log('tomar café');
    })
    .then(() => {
        return console.log('lavar xícara');
    });