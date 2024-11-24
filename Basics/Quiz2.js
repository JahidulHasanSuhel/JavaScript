// print the marks of a student in a obj using for loop

let marks = {
    suhel : 97,
    sarif : 98,
    arif : 99,
    zihad : 100
}

// for(let i = 0; i<Object.keys(marks).length; i++){
//     console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

//using for in loop
for(let i in marks){
    console.log("the marks of " + i + " are " + marks[i]);
}

// //program to print "try again" until user input correct number
// const prompt = require("prompt-sync")();

// let correctNum = 50;
// let i;
// while(i != correctNum){
//     console.log("Try Again ");
//     i = prompt("Enter Number ");
// }
// console.log("You have entered correct Number ")