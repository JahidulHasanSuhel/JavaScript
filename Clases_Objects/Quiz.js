//1-> creating a web for your Clg. create a class User with 2 properties
// name, eamail. it also has a method call viewData that allows
// to view web data

//2-> create a new class called Admin which inherits from User. add
// a new method called editData to Admin that allows it to edit
// web data

let Data = "Some secret data";
class Uesr {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data : ", Data);
  }
}

class Admin extends Uesr{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        Data = "Some new Data"
    }
}

let student1 = new Uesr("Suhel", "abc@gmail.com");
let student2 = new Uesr("Sarif", "sarif@gmail.com");

let a1 = new Admin("admin", "admin@gmail.com");