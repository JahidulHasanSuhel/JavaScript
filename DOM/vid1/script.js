// DOM Types 
    // 1. Document - Represents the entire page and it is the root node of the DOM tree.
    // 2. Node - A generic term for any elements in DOM tree. like Element Node, Text Node, Attribute Node
    // 3. Element - A specific type of node that represents HTML tags/elements.
    // 4. NodeList - an array of nodes.
    // 5. Attr - attribute of a node
        // <img src="" alt="some img" />
    // 6. NameNodeMap - a collection of Attr.


//Accessing DOM

    //by id
    let idElem = document.getElementById("heading");
    console.log(idElem)

    // by class
    let infoElm = document.getElementsByClassName("para")
    console.log(infoElm);
    
    [...infoElm].forEach(element => {
        console.log(element)
    });

    //by tag name
    let tagElem = document.getElementsByTagName("p");
    console.log(tagElem)

    // selectors = query selector and query selectior all
    // query selector
    let info = document.querySelector("p.para");
    console.log("using query selector", info);


    //query selector all
    let info2 = document.querySelectorAll("p.para");
    console.log("using query selector all", info2);

    