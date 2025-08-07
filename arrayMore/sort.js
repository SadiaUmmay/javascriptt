const numbers = [6, 7, 8, 9, 3, 2];
// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ['sakib', 'rakib', 'akib', 'cakib', 'bakib']
friends.sort();
// console.log(friends)


const ages=[1, 5, 12, 345, 46, 234, 67, 34]
console.log(ages)
ages.sort();
// console.log(ages);

// aescending
const sorted_ages = ages.sort(function(a, b) {return  a - b})
// console.log(sorted_ages)


// descending
const sorted_ages_desc = ages.sort(function(a, b){return b - a })
// console.log(sorted_ages_desc)