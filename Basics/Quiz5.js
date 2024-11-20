const canDrive = (age) =>{
    return age>=18 ? true : false 
}
  

let runAgain = true;

while(runAgain){

    let age = prompt("what is your age ");
    age = Number.parseInt(age);
    
    if(age < 0){
        console.error("please enter valid number ")
        break;
    }

    if(canDrive(age)){
        alert("you can drive");
    }
    else{
        alert("you can't drive")
    }

    runAgain = confirm("do you want to palay again? ")
}

// if i want to redirect 
// if number is greater than 4 then redirect it to google
// if(Number>4){
//     location.href = "https://google.com"
// }