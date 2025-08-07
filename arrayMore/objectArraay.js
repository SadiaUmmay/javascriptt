const numbers = [1, 2, 45, 34, 78]
const players = [{}, {}, {}]
const employees = [
    { name: 'asad', profession: 'writer', salary: 25000 },
    { name: 'abul', profession: 'developer', salary: 45000 },
    { name: 'samad', profession: 'teacher', salary: 34000 }
]
// console.log(employees)
// console.log(employees[0])
// console.log(employees[2].salary)

for(const employee of employees){
    const person = employee;
    const personinfo = person.name + ' : ' + person.salary
    console.log(personinfo)
}