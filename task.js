// task 1 ............................

let burger = 600;
if (burger>500){
    console.log('Free coke')
}
else{
    console.log('coke-30tk')
}

// task 2 ..........................

let weight = 82;
let height = 1.5;
let BMI = weight/(height^2)
console.log(BMI)
if(BMI<18.5){
    console.log('You are Under weight')
}
else if (BMI>=18.5 && BMI<=24.9){
    console.log('You are normal')
}
else if (BMI>=25 && BMI<=29.9){
    console.log('you are over weight')
}
else{
    console.log('you are obese')
}