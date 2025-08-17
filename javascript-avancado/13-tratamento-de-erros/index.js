let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('fervendo a água')
            resolve(true)
        } else {
            const erro = 'ligue o fogão e coloque a chaleira no fogao'
            reject(erro)
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
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finally')
    }
}

iniciarProessoDeFazerCafe()