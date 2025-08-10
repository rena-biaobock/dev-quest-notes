let frutas = ['banana', 'maça', 'laranja', 'pêra']

for (let i = 0; i < frutas.length; i++) {
    console.log('Fruta: ' + frutas[i])
}

frutas.forEach(function(value){
    console.log('Fruta: ' + value)
})

console.log("--------------------")
''
frutas.push('manga')
console.log(frutas)

let last_value = frutas.pop()
console.log(frutas)
console.log(last_value)

let first_value = frutas.shift()
console.log(frutas)
console.log(first_value)

frutas.unshift('morango')
console.log(frutas)

let index_of = frutas.indexOf('laranja')
console.log(index_of)