//Q - 1
// Js program to create a word meaning dictionary

// const dict = {
//     yakka : "work, especially hard work",
//     appriciate : "recognize the full worth of",
//     stupid : "being foolish"
// }


// //both are same
// console.log(dict.yakka);
// console.log(dict["yakka"]);


//Q - 2
//switch case
const prompt = require('prompt-sync')();
let age = prompt("what is your age ");
age = Number.parseInt(age);

switch (age){
    case '12':
        console.log("your age is 12");
        break;
    case '13':
        console.log("your age is 13");
        break;
    case '14':
        console.log("your age is 14");
        break;
    case '15':
        console.log("your age is 15");
        break;
    default:
        console.log("your age is not special")

}