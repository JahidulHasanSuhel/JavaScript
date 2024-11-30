//shows the element dom tree
console.log(document.getElementsByTagName("span")[0])

//show the element as an object with it's properties
console.dir(document.getElementsByTagName("span")[0])


//nodeName
// document.body.firstChild.nodeName
// document.body.firstElementChild.nodeName

//first--> is id name
// first.innerHTML
// first.innerHTML = "<i> i am italic </i>"

// first.outerHTML
// first.outerHTML = "<div> hey </div>"

//it will give all the texts
console.log(document.body.textContent)

// first.hidden = false

// document.body.firstChild.data

// first.removeAttribute("class")

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)