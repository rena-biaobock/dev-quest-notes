const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

console.log(dataAtual);
console.log(dia);
console.log(mes);
console.log(ano);

let seteDiasDepois = () => {
    let seteDiasDepois = new Date(dataAtual);
    seteDiasDepois.setDate(seteDiasDepois.getDate() + 7);
    console.log(seteDiasDepois.getDate())
}

seteDiasDepois()


const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formatardor = new Intl.DateTimeFormat('pt-BR', opcoes);

const dataFormatada = formatardor.format(dataAtual);

console.log(dataFormatada);