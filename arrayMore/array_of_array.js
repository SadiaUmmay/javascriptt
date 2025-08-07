const numbers=[ 1, 2, 3, 3, 56, 45]
const runs = [[],[],[]];
const exam_marks =[
    [45, 67, 89, 90],
    [65, 90, 66, 88],
    [49, 82, 71, 60]
]

// console.log(exam_marks[0])


// console.log(exam_marks[0][0])

// const first_mark = exam_marks[0]
// console.log(first_mark[0])

exam_marks[0][1]= 78
exam_marks[1].pop()
exam_marks[1].push(33)
// console.log(exam_marks)


for (const  marks of exam_marks)
    console.log(marks)