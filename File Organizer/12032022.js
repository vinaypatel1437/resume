// // process :- Object
// // argv :- array
// // By default input string hota hai
// // process.argv ek array hota hai jisme input rakha hua hota  hai 
// // ['node_ka_path','file_ka_path',first_input,second_input....so on]
// // Minimist library input lena aasan karti hai
// // npm install minimist
// // require:- non-modular form
// // import modular form hota hai
// let minimist = require('minimist');
// // minimist me process.argv pass kar rha hu or wo kuch arguments return kr rha hai
// let args = minimist(process.argv);
// // args = {
// //     a:50,
// //     b:40
// // }

// let a = args.a
// let b = args.b
// console.log(args)

// // Task 1:- PRIME NUMBER a =lower limit input, b = upper limit input :- 
// // a se b ke bich ke sare prime number print krne hai


// // Task 2:- Palindrome ka program.
// // 1229221 ? Yes : no


console.log(getFrequency("7722952738"))
function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};


