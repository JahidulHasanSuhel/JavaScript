//event handling in markup lan..
function handleClick(greeting){
    console.log(`button clicked with ${greeting}`)
}

//event handling in script

const myBtn2Elem = document.getElementById("myBtn2");
myBtn2Elem.onclick = function(){
    console.log("my btn 2 clicked")
}

myBtn2Elem.onclick = () => handleClick("hola");// arrow fn er vitore onno fn call kora lagbe. noyto error dibe.

//note: onclick hold one handler. after call it replace previous handler.
//addEventListener can hold multiple handler.


//addEventListener and removeEventListener
//addEventListener er vitore fn define na kore bahire korte hbe then oi fn ta pass kore dite hbe. this is best practice
let counter = 0;
const handleCount = function () {
  console.log("counter", counter);
  counter++;
};

const greetMe = function(){
    console.log("thank you.")
}
const countBtnElem = document.getElementById("countBtn");
countBtnElem.addEventListener("click", handleCount)
countBtnElem.addEventListener("click", greetMe)
// countBtnElem.removeEventListener("click", handleCount)

//DOM Content Loaded
document.addEventListener("DOMContentLoaded", function(){
    // console.log("dom content loaded..")
})

// Event Object

const seacrhElem = document.getElementById("searchId");

function handleChange(event){
    console.log(event)

    console.log("Target:", event.target);
    console.log("Target Name:", event.target.name);
    console.log("Target Value:", event.target.value);
    console.log("Target Type:", event.type);
    console.log("Current Target:", event.currentTarget);

    console.log(this)
}
seacrhElem.addEventListener("change", handleChange)

//event bubbling
// In event bubbling, the event starts from the target element and bubbles upwards through its ancestors (parent → grandparent → etc.).

// The Flow is: Child → Parent → Grandparent → Document

document.getElementById("grandParent").addEventListener("click", function(){
    console.log("grandparent clicked")
})
document.getElementById("parent").addEventListener("click", function(){
    console.log("parent clicked")
})
document.getElementById("child").addEventListener("click", function(){
    console.log("child clicked")
})

// Capturing

// In event capturing, the event flows from the outermost ancestor down to the target element before the actual target handles it.

// The Flow is: Document → Grandparent → Parent → Child

// Rarely used, but useful if you want to catch events before they reach the target.

document.getElementById("grandParent").addEventListener("click", function () {
  console.log("captured grandparent clicked");
}, true);
document.getElementById("parent").addEventListener("click", function () {
  console.log("captured parent clicked");
},true);
document.getElementById("child").addEventListener("click", function () {
  console.log("captured child clicked");
},true);

//event delegation
// Event Delegation - it is a technique where you add a single event listener to a parent element instead of each child. It uses event bubbling to handle events from dynamically added or existing child elements.

// Efficient for handling events on lists, tables, or any repeated/dynamic content.
document.getElementById("itemList").addEventListener("click", (event) =>{
    if(event.target.tagName === "LI"){
        console.log(`you clicked on ${event.target.textContent}`)
    }
})


//custom events
//  Step 1: Create a CustomEvent
const myEvent = new CustomEvent("userLoggeddIn", {
    detail:{
        user: "suhel",
        role: "admin"
    }
})
// Step 2: Listen for the Custom Event
document.addEventListener("userLoggeddIn", (e) => {
  console.log(`user Log in detected ${e.detail.user} `);
});
// Step 3: Dispatch the Custom Event
document.dispatchEvent(myEvent)

//Auth Module ex.
//authentication logic
function loginUser(username){
    const event = new CustomEvent("userLoggedIn", {
        detail: {username},
    })
    document.dispatchEvent(event);
}

//navbar
document.addEventListener("userLoggedIn", (e)=>{
    const user = e.detail.username;
    document.getElementById("welcome").textContent = `welcome, ${user}`
})
