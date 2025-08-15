let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

let pessoasComIdadeDe33Anos = pessoas.filter(pessoa => pessoa.idade === 33)

console.log(pessoasComIdadeDe33Anos)