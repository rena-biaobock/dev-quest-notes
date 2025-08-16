let pessoa = { nome: 'Roberto', sobrenome: 'Dias', idade: 33 }

// let nome = pessoa.nome
// let idade = pessoa.idade

let { nome, idade } = pessoa

console.log(nome)
console.log(idade)


var numeros = [1, 2, 3];

const [ um, dois, tres, quatro ] = numeros

console.log(um)
console.log(dois)
console.log(tres)
console.log(quatro)