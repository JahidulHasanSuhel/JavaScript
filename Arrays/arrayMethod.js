let num = [1, 2, 3, 5]
let b = num.toString() // b is now string 
console.log(b, typeof b)

let c = num.join("-");
console.log(c) //output 1-2-3-5

let DeletedElement = num.pop();
console.log(num, DeletedElement)

num.push(45);
console.log(num)

let s = num.shift();//remove first element of an array
console.log(s, num);

let s1 = num.unshift(34);//add elements in start of an array
console.log(s1, num) // return new array length

