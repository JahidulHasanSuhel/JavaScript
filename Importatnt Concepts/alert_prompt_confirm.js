//alert > open a mini window in the browser
// alert("hello your script works good ")

// alert("enter your value ")
// let a = prompt("enter a here ")
// // a = Number.parseInt(a)
// prompt("you entered ", (typeof a))// prompt can have default value

// it will run browser console
alert("enter your value ")
let a = prompt("enter a here ")
a = Number.parseInt(a)
prompt("you entered ", (typeof a))

let write = confirm("do you wanna write it?");
if(write){
    document.write(a);
}
else{
    document.write("allow me to write")
}