//objects mastering
let user = {
    name: "suhel",
    age: 25,
    "is senior":" "
}
console.log(user.name)
console.log(user.age)

user["movie lover"] = true;

user["is senior"] = false;

console.log(user)

//deleting obj
// delete user["movie lover"]
// delete user.age;
console.log(user)

const random = "age";
console.log(user[random])

//dynamically obj creation from user
// let car = prompt("which is your fav car?");

// let favCars = {
//     [car] : 5
// }
// console.log(favCars)


//constructor fn :- this will provide a name of an obj in console.
function Car(name, model){ //constructor fn must start with capital letter
    this.name = name;
    this.model = model;
}

const bmwCar = new Car("BMW", "X1")

console.log(bmwCar);
console.log(bmwCar instanceof Car)//bmw car er instance kina oita dekhar jonno

//another way of creating obj

const person = new Object()
person.name = "alpha";
person.age = 33
console.log(person)



//obj methods
let profile = {
    name: 'suhel',
    company: "appsCreation",
    message: function(){
        console.log(`${this.name} works at ${this.company}`)
    },
    address: {
        city: "dhk",
        pin: 3333,
        country: "bd",
        gretting: function(){
            console.log("welcome to bd")
        }
    }
}

//for...in
for(let key in profile){
    console.log(key)
    console.log(profile[key])
}

profile.message()
console.log(profile.address.country)
profile.address.gretting()

//static methods