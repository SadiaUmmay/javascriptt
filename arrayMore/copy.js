const price = 25;
const price2 = price;

// console.log(price);
// console.log(price2)

const products = [25, 25, 25];
const product2 =[]

for (const product of products){
    product2.push(product)
}
// const product2 = products;

product2[0]=85

// console.log(products)
console.log(product2)
// ............................................


const numbers = [1, 2, 3, 4 ,5]
// const newNumber = Array.from(numbers)
// const newNumber = [].concat(numbers)
const newNumber = [...numbers]
newNumber.push(9)

// console.log(numbers)
// console.log(newNumber)