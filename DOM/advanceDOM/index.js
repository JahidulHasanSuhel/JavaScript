console.log("advanced DOM");


//Efficient DOM traversal
const parent = document.querySelector(".card");
const firstChild = parent.firstElementChild;
const nextChild = firstChild.nextElementSibling;
const lastChild = parent.lastElementChild;
const parentOfElement = firstChild.parentElement;

//Template and Cloning
const template = document.getElementById('cardTemplate');
const clone = template.content.cloneNode(true);
clone.querySelector('.title').textContent = "DOM advaced topic";
clone.querySelector('.desc').textContent = "hope you are learning something new";

document.body.append(clone);
