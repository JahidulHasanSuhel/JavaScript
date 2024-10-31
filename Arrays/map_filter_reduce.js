// map() -> creates a new array by performing some 
// operations on each array element

let arr = [3, 6, 7];
//array map method
let a = arr.map((val, index, array) =>{ // creates a new array
    console.log(val, index, array);// they don't change the original array
    return val + 1;
})
console.log(a, arr)

//array filter method
//filters an array with values that passes a test. 
// creates new array
let arr2 = [44, 55, 66, 7, 8, 9];
let a2 = arr2.filter((a) => {// they don't change the original array
    return a<10
})
console.log(a2, arr2)

//array reduce method
// function can be create as variable in js
let arr3 = [1, 3, 4, 6, 7];
const reduce_func = (h1, h2)=>{
    return h1 + h2;
}
let a3 = arr3.reduce(reduce_func)
console.log(a3)

//map return array
//filter return array
//reduce return value  