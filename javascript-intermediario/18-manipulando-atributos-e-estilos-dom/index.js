function alterarCorDeFundo () {
    let paragrafo = document.getElementById('paragrafo')
    paragrafo.style.backgroundColor = 'red';
}

function fonteGrande () {
    let paragrafo = document.getElementById('paragrafo')
    paragrafo.classList.add('fonte-grande')
}

fonteGrande()