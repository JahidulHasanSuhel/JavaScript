//  class Parent {
//     hello(){
//         console.log("hellooo");
//     }
//  }

//  class Child extends Parent{
//  }

//  let obj = new Child();


class Person{
    constructor(name){
        this.species = "Homo Sapiens"
        this.name = name;
    }
    eat(){
        console.log("eating")
    }

    // sleep(){
    //     console.log("sleeping")
    // }
}

class Engineer extends Person{

    constructor(name){
        super(name);//to invoke parent class constructor
    }

    work(){
      super.eat();
      console.log("solve problems, build something");
    }
}
// class Doctor extends Person{
//     work(){
//         console.log("save patients life");
//     }
// }

let engObj = new Engineer("cse engg");
// let DocObj = new Doctor();