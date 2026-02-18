//Creating Elements
{
    const pElem = document.createElement("p");
    // pElem.innerText = "this is dynamic paragraph";
    document.body.appendChild(pElem);
    // console.log(pElem);
}

//insert Elements
{
    const span = document.createElement("span");
    span.innerText = "I am a Span";
    const pElem = document.querySelector("p");
    document.body.insertBefore(span, pElem);//pElem.nextElementSibling used for add after
}


//Modifying Content
{
    const pElem = document.querySelector("p");
    pElem.innerHTML = "hellow how are you doing? "
}

//Removing Elements
{
    let list = document.getElementById("myList");
    const itemToRemove = list.children[0];
    // list.removeChild(itemToRemove)
    // console.log(list.children);
    //list.innerText = "" -> this will remove all content.
    document.getElementById("removeMe").remove();
}

//Read, Write and Remove
{
    const imgElm = document.querySelector("img");
    console.log(imgElm.getAttribute("alt"));


    // imgElm.setAttribute("src", "imagePath.png..");//src path
    // imgElm.setAttribute("alt", "some nice img");//alt path

    imgElm.removeAttribute("height")//height will remove

    imgElm.hasAttribute("src")//true
    imgElm.hasAttribute("width")//false

}

//Travarsing/Navigating DOM
{
    //parentElement and parentNode
    const span = document.getElementById("text");

    console.log("parent element", span.parentElement.parentElement);
    console.log("parent node", span.parentNode.parentNode);


    //children and childNodes
    const mainElm = document.getElementById("title");

    // console.log("Children", mainElm.children);
    // console.log("Child Node", mainElm.childNodes);

    // console.log("First Child", mainElm.firstChild);
    // console.log("First Child Element", mainElm.firstElementChild);

    const some = document.getElementById("sm1")
    console.log("next sibling", some.nextSibling)
    console.log("next element sibling", some.nextElementSibling)

    console.log("previous", some.previousSibling)
    console.log("previous element sibling", some.previousElementSibling)
}

//Manipulating styles
{
    const pElem = document.getElementById("pId");
    console.log(pElem.style)
    pElem.style.backgroundColor = "pink";
}


//Manipulating classes
{
    const mainDivElem = document.getElementById("title");
    console.log(mainDivElem.className);
    mainDivElem.className = "second-class";
    console.log(mainDivElem.className);

    //mainDivElem.classList.add("test")//it will add a class called test in the div.
    //we can use remove, replace too

}

//controlling visibilities
{
    const pElem = document.getElementById("title");
    // pElem.style.display = "none";

    // pElem.style.visibility = "hidden";
    pElem.style.opacity = "1"// 0 means hidden
}