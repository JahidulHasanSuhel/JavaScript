// add a number in array from user
// let arr = [3, 5, 6, 7, 8];
// const prompt = require("prompt-sync")();
// let a = prompt("Enter your number> ");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//keep number adding in array until 0 is added
let arr = [3, 5, 6, 7, 8];
let a;
do{
const prompt = require("prompt-sync")();
a = prompt("Enter your number> ");
a = Number.parseInt(a);
arr.push(a);
} while(a != 0);
console.log(arr);