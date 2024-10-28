const prompt = require('prompt-sync')();
let a = prompt("hey what's your age? ");
a = Number.parseInt(a);

if(a < 0){
    console.log("invalid age ");
}
else if(a < 9){
    console.log("kid you can't drive ");
}
else if(a < 18 && a >= 9){
    console.log("you can think driving after 18 ");
}
else{
    console.log("you can now drive as you are above 18");
}