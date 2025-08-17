let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('fervendo a água')
            resolve(true)
        } else {
            console.log('ligue o fogão e coloque a chaleira no fogao')
            reject()
        }
    })
}

let passarCafe = (aguaFervida) => {
    return new Promise ((resolve, reject) => {
        if (aguaFervida) {
            console.log('passando café')
            resolve(true)
        } else {
            console.log('a agua precisa estar fervida para passar o café')
            reject()
        }
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise ((resolve, reject) => {
        if (cafePassado) {
            console.log('tomando café')
            resolve(true)
        } else {
            console.log('o café não está passado')
            reject()
        }
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise ((resolve, reject) => {
        if (cafeTomado) {
            console.log('lavando a xícara')
            resolve(true)
        } else {
            console.log('tome o café antes de lavar a xícara')
            reject()
        }
    })
}


let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true


async function iniciarProessoDeFazerCafe () {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if (xicaraLavada) console.log('café tomado e xícara lavada')
}

iniciarProessoDeFazerCafe()