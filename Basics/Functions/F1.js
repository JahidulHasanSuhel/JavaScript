// functions should be invoked either it will be useless
function OnePlusAvg(x, y){
    return 1 + (x + y)/2;
} 


let a = 2;
let b = 4;
let c = 6;

console.log(" 1+ Average of a and b is ", OnePlusAvg(a, b));// invoked
console.log(" 1+ Average of a and c is ", OnePlusAvg(a, c));
console.log(" 1+ Average of b and c is ", OnePlusAvg(b, c));

//arrow function
const sum = (p, q) =>{
    return p + q;
}

console.log(sum(5, 6));

//without arguments
const hello = () => {
    console.log("hello brother");
    return "hi";

}
let v = hello();
console.log(v);