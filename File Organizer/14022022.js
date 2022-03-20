// fs module use hhota hai read write append ke liye
// fs module file manipulation ke kaam aata hai
let fs = require('fs');
// read :- readFile, readFileSync
// write:- writeFile, writeFileSync
// append:- appendFile, appendFileSync

// 1. Callback wali method read krne ke liye
// fs.readFile('readme2.txt','utf-8',(err,data)=>{
//     console.log(data)
// })

// 2. promises wali jisme hum async await use krenge;
// fs = fs.promises;
// (async function File_read_krne_wala_function(){
//     try{
//         let data = await fs.readFile('readme2.txt','utf-8');
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// })();

// 3. promise wala tarika then catch wala
// fs = fs.promises;
// fs.readFile('readme2.txt','utf8').then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// 4. readFileSync wala
// console.log(fs.readFileSync("readme.txt",'utf-8'))

// write :- writeFile, writeFileSync

// 1. callback wala

// fs.writeFile('readme4.txt','Mera name Vinay hai','utf-8',(err)=>{
//     console.log(err)
// })

// 2. promises waali async await use krenge
// fs = fs.promises
// async function fn(){
//     await fs.writeFile('readme4.txt',"New Data ","utf-8");
// }
// fn();

// 3. then catch wala tarika
// fs=fs.promises
// fs.writeFile('readme2.txt',"ner data","utf-8")
// .then(()=>console.log("success")).
// catch((err)=>console.log(err));

// 4. writeFileSync wala
// fs.writeFileSync('readme4.txt',"asdfasd",'utf-8');

// append krna
// fs.appendFileSync('readme4.txt',"asdfasd",'utf-8');

// fs.unlinkSync("readme3.txt");

// Folder wala work 
// folder banana :- mkdir, mkdirSync
// folder remove krna:- rmdir, rmdirSync
// lstat:- lstat, lstatSync
// try{
//     fs.lstatSync('readme6.txt');
//     consol.log("File Hai");
// }
// catch(err){
//     console.log("File Nahi hai");
// }
// console.log(fs.lstatSync('bane').isDirectory())


// copy karna kaam kese krta hai
// readFile --> create file -> data paste kiya

// File system ka copyFile kese kaam krta hai
// readFile --> data paste krta hai


// cut kese hota hai
// readFile --> create File -> data paste krta hai  --> delete krta hai

// File System (fs) ek function hota hai jo copy krne ke kaam hai
// fs.copyFile,
// fs.copyFileSync,
// fs.mkdirSync('E:/vinay')
// fs.copyFileSync('readme6.txt','E:/vinay/readme6.txt')
// fs.unlinkSync('readme5.txt')

// fs.existsSync('readme5.txt')


