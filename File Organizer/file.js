// a = process.argv[0]
// b = process.argv[1]
// c = parseInt(process.argv[2])
// d = parseInt(process.argv[3])
// console.log(process.argv);
// Task 1 :- Factorial ka program banao.. User se input lekr...



// Task 2:- Write a code for fibonacci series... 
//  isme 3 input variable :- jisme a = first value
// b = second value
// c = No. of digits



// Task 3:- Pattern 
// Input lena hai number of rows
// 1
// 1 2
// 1 2 3
// 1 2 3 4  
//  Question ye h ki same line ke liye kya krna hai.

// let no_of_lines = process.argv[2];
// let str= "";
// for(let i=1;i<=no_of_lines;i++){
//     for(let j=1;j<=i;j++){
//         str+="* \t"
//     }
//     str+="\n"
// }
// console.log(str)
// str= 
// "*\n*\t*\n*\t*\t*\n*\t*\t*\t*"


// a = process.argv[2]
// b= process.argv[3]
// console.log(process.argv)


let fs = require('fs')
let status = fs.lstatSync('bane').isFile()
console.log(status)








