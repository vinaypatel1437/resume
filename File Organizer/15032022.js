let minimist  = require("minimist")
let args = minimist(process.argv)
let value = args.value;

// function getFreuency(value){
//     let frequency = {};
//     for(let i=0;i<value.length;i++){
//         let character = value.charAt(i);
//         if(frequency[character]){
//             frequency[character]++;
//         }else{
//             frequency[character]=1
//         }
//     }
//     return frequency
// }

// let getFreuency = value => value.split("").reduce((a,c)=>(a[c]=a[c]+1 || 1) && a,{})
// let getFreuency = value => [...value].reduce((a,c)=>(a[c]=a[c]+1 || 1) && a,{})

// console.log(getFreuency(value))

// variable = "My name is Vinay"
// console.log(variable.split(""))
// console.log([...variable])









// arr = [1,2,3,4,5,6]
// arr[3]=100
// arr["name"] = "Vinay"
// arr["age"]="34"
// console.table(arr.length)
// arr=[1,3,4,5,6,6]
// arr[2]=100
// arr[100]=80
// console.log(arr)




