// "use strict";

//inside of an obj
// implicit binding
//  when a function is invoked as a method of an object using dot notation, 'this' is automatically bound to the object that contains the method at the time of the call.

const user = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet(); // Output: Hello, my name is Alice

// Here, because greet() is called using user.greet(), this inside the greet function is bound to the user object, so this.name resolves to 'Alice'.

// inside of a normal fn
function sayName() {
  console.log("this inside of a function", this);
}
sayName();

// if i am using 'this' inside a stand alone fn then this will be undefined not window. for this we have to use strict mode on top of the js file. -> "use strict";

function outer(a) {
  console.log("this inside an outer fn", this);

  return function inner(b) {
    console.log("this inside an inner fn", this);
  };
}
// const outerResult = outer(5);
// outerResult(3);

//arrow fn
// so the arrow fn doesn't have the 'this'. arrow fn 'this' always refer to the window which is undefined. so how do i use arrow fn 'this'.

const food = {
  spec: "mango",
  color: "yellow",

  getDesc: function () {
    return () => `${this.spec} is ${this.color}`;
  },
};
const descFn = food.getDesc();
console.log(descFn());

//explicit binding
//call method
function greeting() {
  console.log(`hello, ${this.name} belongs to ${this.address}`);
}

const Us = {
  name: "suhel",
  address: "heaven",
};

greeting.call(Us);

//examples
// const user = {
//   name: "Tapas",
//   greet: function () {
//     const inner = () => { //that's why arrow fn is most important
//       console.log(`Hello, ${this.name}!`);
//     };
//     inner();
//   },
// };
// user.greet();



// const obj = {
//   name: "John",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// const greetFn = obj.greet;

// greetFn.call(obj);