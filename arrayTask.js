// task 1 ....................\

let fruits = ['banana', 'apple', 'orange', 'mango', 'guava']
console.log(fruits.indexOf('mango'))
fruits[2]='jambura'
console.log(fruits)

// task 2 /................../

let spots = ['bandarban', 'sajek', 'rangamati']
console.log(spots)
spots.push('jaflong')
console.log(spots)

spots.push('barekka tila', 'sadapathor')
console.log(spots)

spots.pop()
console.log(spots)


// task 3 ............./

let books = ['horror', 'science', 'funny']
console.log(books.includes('javascript'))


// task 4 ................../

const num = []
const food = 'roshogolla'
const age = 24
console.log(Array.isArray(num))
console.log(Array.isArray(age))

// task 5 ............../

let array1 =[1 , 2, 4, 9, 5];
let array2 = ['sada', 'kalo', 'lal']
console.log(array1)
console.log(array2)
let combinedArray = array1.concat(array2)
console.log(combinedArray)