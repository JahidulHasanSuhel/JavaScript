//Creating Elements
{
    const pElem = document.createElement("p");
    pElem.innerText = "this is dynamic paragraph";
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
    list.removeChild(itemToRemove)
    // console.log(list.children);
    //list.innerText = "" -> this will remove all content.
    document.getElementById("removeMe").remove();
}