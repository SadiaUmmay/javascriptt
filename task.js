// task 1 ............................

let burger = 600;
if (burger>500){
    console.log('Free coke')
}
else{
    console.log('coke-30tk')
}

// task 2 BMI calculator..........................

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

// task 3 grade calculator .....................


let studentScore = 66;
if(studentScore>80){
    console.log('A+')
}
else if (studentScore<80 && studentScore>=70 ) {
    console.log('A')
}
else if (studentScore<70 && studentScore>=60 ) {
    console.log('A-')
}
else if (studentScore<60 && studentScore>=50 ) {
    console.log('B')
}
else if (studentScore<50 && studentScore>=40 ) {
    console.log('c')
}
else if (studentScore<40 && studentScore>=33 ) {
    console.log('D')
}
else{
    console.log('fail')
}

// task 4 ...........................

let num1 =2;
let num2=3;
// if(num1<num2){
// let result=num1 * 2
// console.log(result)
// }
// else{
//     let result = num1+num2;
//     console.log(result)
// }
num1<num2 ? console.log(num1*2) : console.log(num1+num2)

// task 5

