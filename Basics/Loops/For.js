//add first n natural num
// const prompt = require('prompt-sync')();
// let n = prompt("enter the value of n ")

// let sum = 0;
// for(let i = 0; i<=n; i++){
//     sum += i;
// }
// console.log("sum of first n natural num is ", sum);

let obj = {
    suhel : 46,
    sarif : 45,
    arif : 54
}
//for in -> is best for itreating object
for(let a in obj){
    console.log("marks of "+ a + " are " + obj[a] )
}

// for of -> loop we need array, string, sets, maps and more
for(let b of "suhel"){
    console.log(b);
}
