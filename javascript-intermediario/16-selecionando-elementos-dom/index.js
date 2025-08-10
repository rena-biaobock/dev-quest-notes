let paragrafo1 = document.getElementById('paragrafo-1')

let inputsPorClasse = document.getElementsByClassName('tag-de-input')

console.log(inputsPorClasse[0])

let inputPorTag = document.getElementsByTagName('input')

console.log(inputPorTag)

let inputPorNome = document.querySelectorAll('input[name="email"')

inputPorNome[0].placeholder = 'campo obrigatório'