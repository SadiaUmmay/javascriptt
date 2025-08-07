// task 1 ..........................

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversed=[]
for(i=0; i<colors.length; i++){
    reversed.unshift(colors[i]);
    
}
// console.log(reversed)


// task 2 .............................

const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = []
for(i=0; i<numbers.length; i++){
    if(numbers[i]%2 == 0){
        even.push(numbers[i])
    }
}
// console.log(even)


// task 3 ..........................

var Names = ['Tom', 'Tim', 'Tin', 'Tik']
finalName ='';
for(var name of Names){
   finalName += name;

}
console.log(finalName)
console.log(typeof finalName)


// task 4 ...........................

const statement = 'I am a hard working person'
const reversedStatement = statement.split(' ').reverse().join(' ');
console.log(reversedStatement)

