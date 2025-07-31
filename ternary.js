// ternery - three parts 


const age = 20;
// if(age>=18){
//     console.log('you can vote')

// }
// else{
//     console.log('Ghumao')
// }


// simple ternary 
age >= 18 ? console.log('vote dite parbe') : console.log('ghumao')



let price = 500;
const isLeader = false ;
// if (isLeader == true){
//     price= 0
// }
// else{
//     price = price + 10
// }

// console.log(price)


// ............................


// if(isLeader == true){
//     if(price> 1000){
//         price = price/2
//     }
//     else{
//         price= 0;
    
//     }
// }
// else{
//     price= price +100
// }
// console.log(price)

// ..................................


price = isLeader == true ? 0 : price + 10;

// console.log(price)