// fs Module
// file system :- ye hota file manipulate krne ke liye 
// Read 
// Write
// update
// fs.readFile :- Read Matlab padhna
// fs.writeFile :- Write Matlab likhna
// fs.appendFile :- Append matlab update krna

let fs = require('fs');


// 1. Using Callback in readFile
// fs.readFile('./readme.txt','utf-8',(err,data)=>{
    //     console.log(data)
    //     console.log(err)
    // });
    
        
// 2. Using async await (promises) in readFile
// fs = fs.promises;
// (async function (){
//     let data = await fs.readFile('readme.txt','utf-8')
//     console.log(data)
// })();

// 3. Using then catch (promises in readFile)
// fs = fs.promises;
// fs.readFile('readme.txt','utf-8').then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// 4. Using readFileSync
// let data = fs.readFileSync('readme.txt','utf-8')
// console.log(data)



// Write wali 4 methods:- 

data = "This is my data which should be written in the file."

// 1. yadi file bani hui hai to usme sara data hata kar naya data daal deta hai
// 2. Yadi file nahi hai to file bana kar data daal deta hai

// 1. Using Callback :- fs.writeFile
// fs.writeFile('readme3.txt',"New data",'utf-8',(err)=>{
//     console.log(err);
//     console.log("Data Updated");
// })

// 2. Async await (promises ) wala
// fs = fs.promises;
// async function naya_wala (){
//     try{
//         await fs.writeFile("readme2.txt",data,'utf-8');
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// naya_wala();
// 3. then catch wali method 
// fs = fs.promises;
// fs.writeFile("readme2.txt","Ye promises wala data hai","utf-8")
// .then(()=>{
//     console.log("Data Updated");
// })
// .catch((err)=>{
//     console.log(err)
// })

// 4. fs.writeFileSync
// fs.writeFileSync('readme2.txt',"Data hai ye writeFileSync wala",'utf-8');




















