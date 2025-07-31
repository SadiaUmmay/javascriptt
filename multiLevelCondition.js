// multi level condition 


// const price = 3000;

// if (price>= 5000){
//     const discount = price* 10/100;
//     const payAmmount = price -discount
//     console.log(payAmmount)
// }
// else if (price > 2500){
//     const discount = price* 5/100;
//     const payAmmount = price -discount
//     console.log(payAmmount)
// }
// else{
//     console.log(price)
// }

// ........................................


const age = 77 ;
const price = 500;
if (age <= 12) {
console.log('you can eat for free');
}
else if (age >= 60 ){
    const discount = price * 50/100;
    const payAmmount= price -discount;
    console.log("you have to pay  " + payAmmount   )
}
else{
    console.log('you have to pay full')
}