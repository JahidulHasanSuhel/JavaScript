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

    //highlight text project
    function HighlightColor(){
        console.log("hiilighting color...")

        let colorElm = document.querySelectorAll("p.para");

        colorElm.forEach((elm)=>{
            elm.style.backgroundColor = "yellow"
        })

    }


    //search on a list

    function filterList(){
       const searchElm =  document.getElementById("searchInput");
       const input = searchElm.value;


       const items = document.querySelectorAll("ul#itemList li");

       items.forEach((item) =>{
       item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
       })
    }