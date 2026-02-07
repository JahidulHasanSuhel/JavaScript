//Destructuring
const student = {
  name: "John Williamson",
  age: 9,
  std: 4,
  subjects: ["Maths", "English", "EVS"],
  parents: {
    father: "Brown Williamson",
    mother: "Sophia",
    email: "john-parents@abcde.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5791,
  },
};

//1 - old way
// const name = student.name;
// const city = student.address.city;
// console.log(name, city);

//2 smart way
// const {name, age} = student;
// console.log(name, age)

// for dynamic perpous
const {name, age, meal="bread"} = student;
console.log(name, age, meal)

//Create a New Variable
const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects);

// Aliases
const {std: standard} = student;
console.log(standard) //now std won't work

// Nested Object Destructuring
const {address: {zip}} = student;
console.log(zip)

// Destructuring to Function Parameter
function sendEmail({parents: {email}}){
    console.log(`sent an email to ${email}`)
}

sendEmail(student)

// Destructure a Function Return Value



// Destructuring in Loops
const students = [
  {
    name: "william",
    grade: "A",
  },
  {
    name: "tom",
    grade: "A+",
  },
  {
    name: "bob",
    grade: "A-",
  },
];

for(let {name, grade} of students){
    console.log(name, grade)
}


//optional chaining

const workers = {
  salary: {
    bonus: 300,
  },
};

// console.log(employee.department); //undefined
//console.log(employee.department.name) - error

const yourName = workers.department?.yourName;
console.log(yourName);
//this is used to reduce runtime error.. now it's give me undefined