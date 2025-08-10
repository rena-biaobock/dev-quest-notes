let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let numberSlice = numbers.slice(0, 2)

console.log(numberSlice)
console.log(numbers)

let numbersSplice = numbers.splice(1, 2)

console.log(numbersSplice)
console.log(numbers)

let numberSpliceAndReplace = numbers.splice(1, 2, 11, 12, 15)

console.log(numberSpliceAndReplace)
console.log(numbers)