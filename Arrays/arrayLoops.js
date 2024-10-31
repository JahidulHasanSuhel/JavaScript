let num = [2, 4, 6, 7, 9];
// for(let i = 0; i<num.length; i++){
//     console.log(num[i]);
// }

//for each loop
// we use this for doing some operation in existing array
num.forEach((element) =>{
    console.log(element * element)
})

// Array.from
// Used to create an array from any other object
let name = "suhel"
let arr = Array.from(name);
console.log(typeof arr, arr)

let n = [3, 7, 8, 9, 5, 2, 4];

for(let i of n){ 
    console.log(i)
}

for(let it in n){
    console.log(n[it])
}