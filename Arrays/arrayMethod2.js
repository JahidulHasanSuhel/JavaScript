let num = [1, 4, 6, 7, 8, 9];
let num2 = [21, 24, 26, 27, 28, 29]
let num3 = [421, 424, 426, 427, 428, 429]

// console.log(num.length)
// delete num[0]; // after delete one element length will be Same as before.
// console.log(num);
// console.log(num.length)

let newArr = num.concat(num2, num3);// it does not change the real array
console.log(newArr)

//Sort Method

let arr = [15, 43, 6, 24, 2, 11];
arr.sort();//it will sort alphabatically
console.log(arr)

//if we want to sort ascending order the we need to create 
// a compare function
const compare = (a, b) => {
    return a - b;
}
let array =[5, 6, 8, 4, 54, 32, 43, 56, 2, 1, 7];
array.sort(compare);
console.log(array);