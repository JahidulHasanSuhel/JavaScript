console.log("hi my name is suhel ");

// console.clear()

const obj = {
    a : 1,
    b : 2, 
    c : 3
}
console.log(obj)
console.table(obj)

console.warn("please don't drink ")
console.error("this is error")
console.info("this is important info")
console.assert(65 > 355)
console.time("starting p1")
console.timeEnd("starting p1")

//for and while loop time compare
console.time("forLoop ")
for(let i = 0; i<5; i++){
    console.log(30);
}
console.timeEnd("forLoop ")


console.time("whileLoop ")
let i = 0
while(i < 5){
    console.log(30)
    i++;
}
console.timeEnd("whileLoop ")