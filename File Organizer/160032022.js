// Matrix Addition
let m1 = [[1,2,3],[4,5,6],[7,8,9]]
let m2 = [[4,5,6],[7,8,9],[1,2,3]]



// let sum = [[],[],[]]
// for(let i=0;i<m1.length;i++){
//     for(let j=0;j<m2.length;j++){
//         sum[i][j] = m1[i][j] + m2[i][j];
//     }
// }
// console.log(sum)
let ans = [[0,0,0],[0,0,0],[0,0,0]]
for(let i =0 ;i<m1.length;i++){
    for(let j=0;j<m2.length;j++){
       for(let k=0;k<m2.length;k++){
           ans[i][j] = ans[i][j]+m1[i][k]*m2[k][j]
       }
    }
}
console.log(ans)




