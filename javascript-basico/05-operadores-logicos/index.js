/*
    == ; comparacao ; a == b
    === ; idêntico ; a === b
    != ; diferente ; a != b
    !== ; não idêntico ; a !== b
    < ; menor que ; a < b
    <= ; menor ou igual ; a <= b
    > ; maior que ; a > b
    >= ; maior ou igual ; a >= b
    && ; E ; a == b && a < b
    || ; OU ; a == b || a < b
    ! ; NOT ; !(a == b)
*/

// Exemplos:

const a1 = 3
const b1 = 3
console.log(a1 == b1)

const a2 = 3
const b2 = "3"
console.log(a2 == b2)

const a3 = 3
const b3 = "3"
console.log(a3 === b3)

const a4 = 3
const b4 = "3"
console.log(a4 !== b4)

const a5 = 3
const b5 = 3
console.log(a5 !== b5)

const a6 = 2
const b6 = 5
console.log(a6 < b6)