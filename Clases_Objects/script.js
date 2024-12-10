// const student = {
//     name:"suhel",
//     marks:75,
//     printMarks: function(){
//         console.log("marks: ", this.marks)//this.marks == student.marks 
//     },
// }
// student.printMarks()

//using prototype
let employee = {
    calTax(){
        console.log("tax is 10%");
    },
};

let suhel = {
  salary: 50000,
  calTax() {
    console.log("tax is 20%");
  },
};

suhel.__proto__ = employee;
//if obj & prototype have same method, obj method will be used
// suhel.calTax();
