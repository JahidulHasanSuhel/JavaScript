//Splice and Slice
let num = [21, 24, 26, 27, 28, 29]
num.splice(2, 3, 2333, 4444, 5555, 6666); // start working idx 2, remove 3 element, add rest of the element
console.log(num);
// let deletedArray = num.splice(2, 3, 2333, 4444, 5555, 6666);
// console.log(deletedArray);

//it creates a new array not modify old array thats why we
// have to create a new array to print this
let arr = [1, 4, 6, 7, 8, 9, 21, 24, 26, 27] 
let newarray = arr.slice(3, 6);
console.log(newarray);